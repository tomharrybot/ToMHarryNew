module.exports.config = {
  name: "video",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙",
  description: "Download videos from YouTube",
  prefix: true,
  usePrefix: true,
  commandCategory: "utility",
  usages: "video [search query]",
  cooldowns: 5,
  dependencies: {
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args }) => {
  const axios = require("axios");
  const fs = require("fs-extra");

  const query = args.join(" ");
  if (!query) {
    return api.sendMessage(`❯❯❯⭑✦ 𝗩𝗶𝗱𝗲𝗼 𝗦𝗲𝗮𝗿𝗰𝗵 ✦⭑❮❮❮
᯽ـــــــــــــــــــــــــــــــــــــــــــــــــ᯽
🔍 ᴘʟᴇᴀsᴇ ᴇɴᴛᴇʀ sᴏɴɢ ɴᴀᴍᴇ
᯽ـــــــــــــــــــــــــــــــــــــــــــــــــ᯽
   𓆩𑁍𓆪𒄬𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙ ᭄࿐`, event.threadID);
  }

  try {
    api.sendMessage(`❯❯❯⭑✦ 🔍 𝗦𝗲𝗮𝗿𝗰𝗵𝗶𝗻𝗴 ✦⭑❮❮❮
᯽ـــــــــــــــــــــــــــــــــــــــــــــــــ᯽
  ${query}
᯽ـــــــــــــــــــــــــــــــــــــــــــــــــ᯽
   𓆩𑁍𓆪𒄬𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙ ᭄࿐`, event.threadID);

    // First API for searching
    const searchUrl = `https://koja-api.web-server.xyz/youtube-search?query=${encodeURIComponent(query)}`;
    const searchResponse = await axios.get(searchUrl);

    if (!searchResponse.data.success || !searchResponse.data.result.video.length) {
      return api.sendMessage("No video results found for your search.", event.threadID);
    }

    const videos = searchResponse.data.result.video;
    const firstVideo = videos[0];
    const videoUrl = firstVideo.url;

    api.sendMessage(`❯❯❯⭑✦ ⬇️ 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗶𝗻𝗴 ✦⭑❮❮❮
᯽ـــــــــــــــــــــــــــــــــــــــــــــــــ᯽
𝐓𝐢𝐓𝐋𝐞: ${firstVideo.title}
𝐀𝐫𝐭𝐢𝐬𝐭: ${firstVideo.authorName}
𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${firstVideo.duration}
᯽ـــــــــــــــــــــــــــــــــــــــــــــــــ᯽
   𓆩𑁍𓆪𒄬𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙ ᭄࿐`, event.threadID);

    // Video download API
    const downloadUrl = `https://koja-api.web-server.xyz/ytmp4?url=${encodeURIComponent(videoUrl)}`;
    const downloadResponse = await axios.get(downloadUrl, { responseType: 'json' });

    if (!downloadResponse.data.success || !downloadResponse.data.download?.url) {
      return api.sendMessage("Error: Could not get video download link.", event.threadID);
    }

    const videoDownloadUrl = downloadResponse.data.download.url;
    const fileName = `${event.senderID}.mp4`;
    const filePath = __dirname + `/cache/${fileName}`;

    // Download the video file
    const videoResponse = await axios({
      method: 'get',
      url: videoDownloadUrl,
      responseType: 'stream'
    });

    const writer = fs.createWriteStream(filePath);
    videoResponse.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        const message = {
          body: `❯❯❯⭑✦ ✅ 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗱 ✦⭑❮❮❮
᯽ـــــــــــــــــــــــــــــــــــــــــــــــــــــــ᯽
𝐓𝐢𝐓𝐋𝐞: ${firstVideo.title}
𝐀𝐫𝐭𝐢𝐬𝐭: ${firstVideo.authorName}
𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${firstVideo.duration}
᯽ـــــــــــــــــــــــــــــــــــــــــــــــــــــــ᯽
   𓆩𑁍𓆪𒄬𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙ ᭄࿐`,
          attachment: fs.createReadStream(filePath)
        };

        api.sendMessage(message, event.threadID, () => {
          fs.unlinkSync(filePath);
          resolve();
        });
      });

      writer.on('error', (error) => {
        console.error('[VIDEO DOWNLOAD ERROR]', error);
        api.sendMessage('Failed to download the video file.', event.threadID);
        reject(error);
      });
    });

  } catch (error) {
    console.error('[ERROR]', error);
    api.sendMessage('An error occurred while processing your video request: ' + error.message, event.threadID);
  }
};