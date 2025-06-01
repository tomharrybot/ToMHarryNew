module.exports.config = {
  name: "Simdata",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙",
  description: "Get SIM card information",
  prefix: true,
  usePrefix: true,
  commandCategory: "utility",
  usages: "simdata [number/cnic]",
  cooldowns: 10,
  dependencies: {
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args }) => {
  const axios = require("axios");

  if (!args[0]) {
    return api.sendMessage(`「 📱 𝗦𝗜𝗠 𝗗𝗮𝘁𝗮 𝗖𝗵𝗲𝗰𝗸𝗲𝗿 📱 」

Please enter a mobile number or CNIC
Example: ${global.config.PREFIX}simdata 03********`, event.threadID);
  }

  const number = args[0];

  try {
    api.sendMessage(`🔍 Searching information for ${number}...`, event.threadID);

    const apiUrl = `https://fresh-data-amir.vercel.app/api/simdata?number=${number}`;
    
    const response = await axios.get(apiUrl);

    if (!response.data || response.data.error || !response.data.data) {
      return api.sendMessage(`❌ No data found for ${number}`, event.threadID);
    }

    // Extract data from the HTML table format
    const data = response.data.data;
    const matches = data.match(/<td>(.*?)<\/td>/g);
    
    if (!matches || matches.length < 4) {
      return api.sendMessage(`❌ Invalid data format received for ${number}`, event.threadID);
    }

    // Clean and extract the information
    const cleanData = matches.map(td => 
      td.replace(/<\/?td>/g, '').trim()
    );

    // Remove duplicates by using only the first set of data
    const resultMessage = `📱 SIM Data Found:

🔢 𝗡𝘂𝗺𝗯𝗲𝗿: ${cleanData[0]}
🆔 𝗖𝗡𝗜𝗖: ${cleanData[1]}
👤 𝗡𝗮𝗠𝗲: ${cleanData[2]}
🏠 𝗔𝗱𝗱𝗿𝗲𝘀𝘀: ${cleanData[3]}

𝗖𝗿𝗲𝗱𝗶𝘁𝘀: 𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙`;

    return api.sendMessage(resultMessage, event.threadID);

  } catch (error) {
    console.error('[SIMDATA ERROR]', error);
    if (error.response) {
      console.error('API Response:', error.response.data);
    }
    return api.sendMessage(`❌ Error fetching data for ${number}. Please try again later.`, event.threadID);
  }
};