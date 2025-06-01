module.exports.config = {
  name: "media",
  version: "2.0.5",
  hasPermssion: 0,
  credits: "𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙",
  description: "Play music/video using API",
  prefix: true,
  usePrefix: true,
  commandCategory: "utility",
  usages: "music [video/audio] [your title]",
  cooldowns: 5,
  dependencies: {
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args }) => {
  const axios = require("axios");
  const fs = require("fs-extra");

  // Check if user wants video or audio
  const type = args[0]?.toLowerCase();
  if (!type || (type !== 'video' && type !== 'audio')) {
    return api.sendMessage(`「 🎵 𝗠𝘂𝘀𝗶𝗰/𝗩𝗶𝗱𝗲𝗼 🎵 」

Usage: 
${global.config.PREFIX}music audio [song name] - for audio download
${global.config.PREFIX}music video [song name] - for video download

Example:
${global.config.PREFIX}music audio kahani suno
${global.config.PREFIX}music video kahani suno`, event.threadID);
  }

  const query = args.slice(1).join(" ");
  if (!query) {
    return api.sendMessage(`「 🎵 𝗠𝘂𝘀𝗶𝗰/𝗩𝗶𝗱𝗲𝗼 🎵 」

Please enter a search query...`, event.threadID);
  }

  try {
    api.sendMessage(`‎「 🎵 𝗣𝗿𝗼𝗰𝗲𝘀𝘀𝗶𝗻𝗴 🎵 」

Searching for "${query}"...`, event.threadID);

    // First API for searching
    const searchUrl = `https://koja-api.web-server.xyz/youtube-search?query=${encodeURIComponent(query)}`;
    const searchResponse = await axios.get(searchUrl);
    
    if (!searchResponse.data.success || !searchResponse.data.result.video.length) {
      return api.sendMessage("No results found for your search query.", event.threadID);
    }

    const videos = searchResponse.data.result.video;
    const firstVideo = videos[0];
    const videoUrl = firstVideo.url;

    api.sendMessage(`‎「 🎵 𝗙𝗼𝘂𝗻𝗱 🎵 」

Title: ${firstVideo.title}
Artist: ${firstVideo.authorName}
Duration: ${firstVideo.duration}

Downloading ${type}...`, event.threadID);

    // Determine the appropriate API endpoint based on type
    const downloadEndpoint = type === 'video' ? 'ytmp4' : 'ytmp3';
    const downloadUrl = `https://koja-api.web-server.xyz/${downloadEndpoint}?url=${encodeURIComponent(videoUrl)}`;
    
    const downloadResponse = await axios.get(downloadUrl, { responseType: 'json' });

    if (!downloadResponse.data.success || !downloadResponse.data.download?.url) {
      return api.sendMessage(`Error: Could not get ${type} download URL from API.`, event.threadID);
    }

    const mediaUrl = downloadResponse.data.download.url;
    const fileExt = type === 'video' ? 'mp4' : 'mp3';
    const fileName = `${event.senderID}.${fileExt}`;
    const filePath = __dirname + `/cache/${fileName}`;

    // Download the file
    const mediaResponse = await axios({
      method: 'get',
      url: mediaUrl,
      responseType: 'stream'
    });

    const writer = fs.createWriteStream(filePath);
    mediaResponse.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        const message = {
          body: `‎「 🎵 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗱 🎵 」

Here is your ${type}!
Title: ${firstVideo.title}
Artist: ${firstVideo.authorName}
Duration: ${firstVideo.duration}

Credits: 𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙`,
          attachment: fs.createReadStream(filePath)
        };

        api.sendMessage(message, event.threadID, () => {
          fs.unlinkSync(filePath);
          resolve();
        });
      });

      writer.on('error', (error) => {
        console.error(`[${type.toUpperCase()} DOWNLOAD ERROR]`, error);
        api.sendMessage(`Error downloading the ${type} file.`, event.threadID);
        reject(error);
      });
    });

  } catch (error) {
    console.error('[ERROR]', error);
    api.sendMessage(`An error occurred while processing the ${type} command: ${error.message}`, event.threadID);
  }
};