const axios = require("axios");
const fs = require("fs");
const path = require("path");
const ytSearch = require("yt-search");

module.exports = {
  config: {
    name: "media",
    version: "1.0.3",
    hasPermssion: 0,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    description: "Download YouTube content as audio or video",
    commandCategory: "Media",
    usages: "[audio/video] [contentName]",
    cooldowns: 5,
    dependencies: {
      "node-fetch": "",
      "yt-search": "",
    },
  },

  run: async function ({ api, event, args }) {
    if (args.length < 2) {
      return api.sendMessage("╭═══🅜🅔🅓🅘🅐═══❤╮\n⏤͟͟͞͞◯⬳  😘😘 ᴵᵀˢ ᴹᴱ ˢᴴᴼᴺᴬ ᯤᯱᯱᯱᯱᯱᯱᯱ ᯤᯱᯱᯱ\n   ᶜᴿᴱᴬᵀᴱᴰ ᵇʸ  𓆩♥︎🅐ᴍɪʀ😍𓆪\n❌ ɪɴᴠᴀʟɪᴅ ᴜsᴇ : ᴍᴇᴅɪᴀ ᴀᴜᴅɪᴏ/ᴠɪᴅᴇᴏ (sᴏɴɢ ɴᴀᴍᴇ)✦\n╰❤═════════════╯", event.threadID, event.messageID);
    }

    const type = args[0].toLowerCase();
    const contentName = args.slice(1).join(" ");

    if (type !== "audio" && type !== "video") {
      return api.sendMessage("╭═══🅜🅔🅓🅘🅐═══❤╮\n⏤͟͟͞͞◯⬳  😘😘 ᴵᵀˢ ᴹᴱ ˢᴴᴼᴺᴬ ᯤᯱᯱᯱᯱᯱᯱᯱ ᯤᯱᯱᯱ\n   ᶜᴿᴱᴬᵀᴱᴰ ᵇʸ  𓆩♥︎🅐ᴍɪʀ😍𓆪\n❌ ɪɴᴠᴀʟɪᴅ ᴜsᴇ : ᴍᴇᴅɪᴀ ᴀᴜᴅɪᴏ/ᴠɪᴅᴇᴏ (sᴏɴɢ ɴᴀᴍᴇ)✦\n╰❤═════════════╯", event.threadID, event.messageID);
    }

    const processingMessage = await api.sendMessage(
      "╭═══🅜🅔🅓🅘🅐═══❤╮\n⏤͟͟͞͞◯⬳  😘😘 ᴵᵀˢ ᴹᴱ ˢᴴᴼᴺᴬ ᯤᯱᯱᯱᯱᯱᯱᯱ ᯤᯱᯱᯱ\n   ᶜᴿᴱᴬᵀᴱᴰ ᵇʸ  𓆩♥︎🅐ᴍɪʀ😍𓆪\n🅢ᴇᴀʀᴄʜɪɴɢ...\n╰❤═════════════╯",
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
      const apiUrl = `https://priyansh-ai.onrender.com/youtube?id=${videoId}&type=${type}&apikey=${apiKey}`;

      api.setMessageReaction("⌛", event.messageID, () => {}, true);

      const downloadResponse = await axios.get(apiUrl);
      const downloadUrl = downloadResponse.data.downloadUrl;

      const safeTitle = topResult.title.replace(/[^a-zA-Z0-9 \-_]/g, "");
      const filename = `${safeTitle}.${type === "audio" ? "mp3" : "mp4"}`;
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
          body: `🎬 Title: ${topResult.title}\n🕒 Duration: ${topResult.duration.timestamp}\n👀 Views: ${topResult.views}\n\nHere is your ${type === "audio" ? "🎧 audio" : "📹 video"} file:`,
        },
        event.threadID,
        () => {
          fs.unlinkSync(downloadPath);
          api.unsendMessage(processingMessage.messageID);
        },
        event.messageID
      );
    } catch (error) {
      console.error(`Failed to download and send content: ${error.message}`);
      api.sendMessage(
        `❌ Failed to download content: ${error.message}`,
        event.threadID,
        event.messageID
      );
      api.unsendMessage(processingMessage.messageID);
    }
  },
};
