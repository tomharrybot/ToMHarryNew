module.exports.config = {
  name: "Simdata",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙",
  description: "Get SIM card information by number or CNIC",
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
Example: *Simdata 03******** Or *Simdata CNIC No`, event.threadID);
  }

  const input = args[0];

  try {
    api.sendMessage(`🔍 Searching information for ${input}...`, event.threadID);

    const apiUrl = `https://fresh-data-amir.vercel.app/api/simdata?number=${input}`;
    const response = await axios.get(apiUrl);

    if (!response.data || response.data.error || !response.data.data) {
      return api.sendMessage(`❌ No data found for ${input}`, event.threadID);
    }

    // Extract all table rows from the response
    const data = response.data.data;
    const rows = data.match(/<tr>(.*?)<\/tr>/g);

    if (!rows || rows.length === 0) {
      return api.sendMessage(`❌ No valid data found for ${input}`, event.threadID);
    }

    // Process each row
    const results = [];
    for (const row of rows) {
      const cells = row.match(/<td>(.*?)<\/td>/g);
      if (cells && cells.length >= 4) {
        const cleanData = cells.map(td => td.replace(/<\/?td>/g, '').trim());
        results.push({
          number: cleanData[0],
          cnic: cleanData[1],
          name: cleanData[2],
          address: cleanData[3]
        });
      }
    }

    // Format the output
    if (results.length === 1) {
      // Single result (likely from number search)
      const result = results[0];
      const message = `📱 SIM Data Found:

🔢 𝗡𝘂𝗺𝗯𝗲𝗿: ${result.number}
🆔 𝗖𝗡𝗜𝗖: ${result.cnic}
👤 𝗡𝗮𝗺𝗲: ${result.name}
🏠 𝗔𝗱𝗱𝗿𝗲𝘀𝘀: ${result.address}

𝗖𝗿𝗲𝗱𝗶𝘁𝘀: 𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙`;
      return api.sendMessage(message, event.threadID);
    } else {
      // Multiple results (from CNIC search)
      let message = `📱 Found ${results.length} SIMs registered with CNIC ${input}:\n\n`;
      
      results.forEach((result, index) => {
        message += `🔹 𝗥𝗲𝘀𝘂𝗹𝘁 ${index + 1}:\n`;
        message += `🔢 𝗡𝘂𝗺𝗯𝗲𝗿: ${result.number}\n`;
        message += `👤 𝗡𝗮𝗺𝗲: ${result.name}\n`;
        message += `🏠 𝗔𝗱𝗱𝗿𝗲𝘀𝘀: ${result.address}\n\n`;
      });
      
      message += `𝗖𝗿𝗲𝗱𝗶𝘁𝘀: 𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙`;
      
      // Split long messages if needed
      if (message.length > 2000) {
        const parts = [];
        while (message.length > 0) {
          const part = message.substring(0, 2000);
          parts.push(part);
          message = message.substring(2000);
        }
        for (const part of parts) {
          await api.sendMessage(part, event.threadID);
        }
      } else {
        return api.sendMessage(message, event.threadID);
      }
    }

  } catch (error) {
    console.error('[SIMDATA ERROR]', error);
    if (error.response) {
      console.error('API Response:', error.response.data);
    }
    return api.sendMessage(`❌ Error fetching data for ${input}. Please try again later.`, event.threadID);
  }
};