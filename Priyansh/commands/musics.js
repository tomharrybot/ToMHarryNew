module.exports.config = {
  name: "music",
  version: "2.0.4",
  hasPermssion: 0,
  credits: "𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙",
  description: "Play music using API",
  prefix: true,
  usePrefix: true,
  commandCategory: "utility",
  usages: "music [your music title]",
  cooldowns: 5,
  dependencies: {
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event }) => {
  const axios = require("axios");
  const fs = require("fs-extra");

  const input = event.body;
  const text = input.substring(12);
  const data = input.split(" ");

  if (data.length < 2) {
    return api.sendMessage(`「 🎵 𝗠𝘂𝘀𝗶𝗰 🎵 」

𝐏𝐥𝐞𝐚𝐬𝐞 𝐄𝐧𝐭𝐞𝐫 𝐒𝐨𝐧𝐠 𝐍𝐚𝐌𝐞...`, event.threadID);
  }

  data.shift();
  const song = data.join(" ");

  try {
    api.sendMessage(`‎「 🎵 𝗣𝗿𝗼𝗰𝗲𝘀𝘀𝗶𝗻𝗴 🎵 」

𝐒𝐞𝐚𝐫𝐜𝐡𝐢𝐧𝐠 𝐟𝐨𝐫 "${song}"...`, event.threadID);

    // First API for searching
    const searchUrl = `https://koja-api.web-server.xyz/youtube-search?query=${encodeURIComponent(song)}`;
    const searchResponse = await axios.get(searchUrl);
    
    if (!searchResponse.data.success || !searchResponse.data.result.video.length) {
      return api.sendMessage("No results found for your search query.", event.threadID);
    }

    const videos = searchResponse.data.result.video;
    const firstVideo = videos[0];
    const videoUrl = firstVideo.url;

    api.sendMessage(`‎「 🎵 𝗙𝗼𝘂𝗻𝗱 🎵 」

𝐓𝐢𝐭𝐥𝐞: ${firstVideo.title}
𝐀𝐫𝐭𝐢𝐬𝐭: ${firstVideo.authorName}
𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${firstVideo.duration}

𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐢𝐧𝐠...`, event.threadID);

    // Second API for downloading
    const downloadUrl = `https://koja-api.web-server.xyz/ytmp3?url=${encodeURIComponent(videoUrl)}`;
    const downloadResponse = await axios.get(downloadUrl, { responseType: 'json' });

    if (!downloadResponse.data.success || !downloadResponse.data.download?.url) {
      return api.sendMessage("Error: Could not get download URL from API.", event.threadID);
    }

    const audioUrl = downloadResponse.data.download.url;
    const fileName = `${event.senderID}.mp3`;
    const filePath = __dirname + `/cache/${fileName}`;

    // Download the audio file
    const audioResponse = await axios({
      method: 'get',
      url: audioUrl,
      responseType: 'stream'
    });

    const writer = fs.createWriteStream(filePath);
    audioResponse.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        const message = {
          body: `‎「 🎵 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗱 🎵 」

𝐇𝐞𝐫𝐞 𝐢𝐬 𝐘𝐨𝐮𝐫 𝐌𝐮𝐬𝐢𝐜 𝐄𝐧𝐣𝐨𝐲! 💙
𝗧𝗶𝘁𝗹𝗲: ${firstVideo.title}
𝗔𝗿𝘁𝗶𝘀𝘁: ${firstVideo.authorName}
𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻: ${firstVideo.duration}

𝗖𝗿𝗲𝗱𝗶𝘁𝘀: 𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙`,
          attachment: fs.createReadStream(filePath)
        };

        api.sendMessage(message, event.threadID, () => {
          fs.unlinkSync(filePath);
          resolve();
        });
      });

      writer.on('error', (error) => {
        console.error('[DOWNLOAD ERROR]', error);
        api.sendMessage('Error downloading the audio file.', event.threadID);
        reject(error);
      });
    });

  } catch (error) {
    console.error('[ERROR]', error);
    api.sendMessage('An error occurred while processing the command: ' + error.message, event.threadID);
  }
};