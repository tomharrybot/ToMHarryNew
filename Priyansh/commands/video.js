const axios = require("axios");
const fs = require("fs");
const path = require("path");
const ytSearch = require("yt-search");

module.exports = {
  config: {
    name: "video",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    description: "Download YouTube content as video",
    commandCategory: "Media",
    usages: "[videoTitle/artist]",
    cooldowns: 5,
    dependencies: {
      "node-fetch": "",
      "yt-search": "",
    },
  },

  run: async function ({ api, event, args }) {
    if (!args.length) {
      return api.sendMessage("╭═══🅥🅘🅓🅔🅞═══❤╮\n⏤͟͟͞͞◯⬳  😘😘 ᴵᵀˢ ᴹᴱ ˢᴴᴼᴺᴬ ᯤᯱᯱᯱᯱᯱᯱᯱ ᯤᯱᯱᯱ\n   ᶜᴿᴱᴬᵀᴱᴰ ᵇʸ  𓆩♥︎🅐ᴍɪʀ😍𓆪\nᴘʟᴇᴀsᴇ ᴛʏᴘᴇ ᴠɪᴅᴇᴏ ɴᴀᴍᴇ...\n╰❤═════════════╯", event.threadID, event.messageID);
    }

    const contentName = args.join(" ");
    const processingMessage = await api.sendMessage(
      "╭═══🅥🅘🅓🅔🅞═══❤╮\n⏤͟͟͞͞◯⬳  😘😘 ᴵᵀˢ ᴹᴱ ˢᴴᴼᴺᴬ ᯤᯱᯱᯱᯱᯱᯱᯱ ᯤᯱᯱᯱ\n   ᶜᴿᴱᴬᵀᴱᴰ ᵇʸ  𓆩♥︎🅐ᴍɪʀ😍𓆪\n🅢ᴇᴀʀᴄʜɪɴɢ ᴠɪᴅᴇᴏ...\n╰❤═════════════╯",
      event.threadID,
      null,
      event.messageID
    );

    try {
      const searchResults = await ytSearch(contentName);
      if (!searchResults || !searchResults.videos.length) {
        throw new Error("No results found for your search query.");
      }

      const topResult = searchResults.videos[0];
      const videoId = topResult.videoId;

      const apiKey = "priyansh-here";
      const apiUrl = `https://priyansh-ai.onrender.com/youtube?id=${videoId}&type=video&apikey=${apiKey}`;

      api.setMessageReaction("⌛", event.messageID, () => {}, true);

      const downloadResponse = await axios.get(apiUrl);
      const downloadUrl = downloadResponse.data.downloadUrl;

      const safeTitle = topResult.title.replace(/[^a-zA-Z0-9 \-_]/g, "");
      const filename = `${safeTitle}.mp4`;
      const downloadPath = path.join(__dirname, "cache", filename);

      if (!fs.existsSync(path.dirname(downloadPath))) {
        fs.mkdirSync(path.dirname(downloadPath), { recursive: true });
      }

      const response = await axios({
        url: downloadUrl,
        method: "GET",
        responseType: "stream",
      });

      const fileStream = fs.createWriteStream(downloadPath);
      response.data.pipe(fileStream);

      await new Promise((resolve, reject) => {
        fileStream.on("finish", resolve);
        fileStream.on("error", reject);
      });

      api.setMessageReaction("✅", event.messageID, () => {}, true);

      await api.sendMessage(
        {
          attachment: fs.createReadStream(downloadPath),
          body: `╭═══🅥🅘🅓🅔🅞═══❤╮\n⏤͟͟͞͞◯⬳  😘😘 ᴵᵀˢ ᴹᴱ ˢᴴᴼᴺᴬ ᯤᯱᯱᯱᯱᯱᯱᯱ ᯤᯱᯱᯱ\n   ᶜᴿᴱᴬᵀᴱᴰ ᵇʸ  𓆩♥︎🅐ᴍɪʀ😍𓆪\nʜᴇʀᴇ ɪs ʏᴏᴜʀ ᴠɪᴅᴇᴏ ᴇɴᴊᴏʏ\n╰❤═════════════╯`,
        },
        event.threadID,
        () => {
          fs.unlinkSync(downloadPath);
          api.unsendMessage(processingMessage.messageID);
        },
        event.messageID
      );
    } catch (error) {
      console.error(`Failed to download video: ${error.message}`);
      api.sendMessage(
        `❌ Failed to download video: ${error.message}`,
        event.threadID,
        event.messageID
      );
      api.unsendMessage(processingMessage.messageID);
    }
  },
};
