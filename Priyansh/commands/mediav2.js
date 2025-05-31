const youtube = require('youtube-search-api');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "amir",
    version: "1.0.3",
    hasPermssion: 0,
    credits: "AMIR",
    description: "Download YouTube content as audio or video",
    commandCategory: "Media",
    usages: "[audio/video] [contentName]",
    cooldowns: 5,
    dependencies: {
      "node-fetch": "",
      "yt-search": "",
    },
  },

module.exports.run = async ({ api, event }) => {
    const input = event.body.slice(6).trim(); // Remove 'media '
    const args = input.split(" ");
    const type = args.shift()?.toLowerCase(); // 'audio' or 'video'
    const query = args.join(" ");

    if (!type || !["audio", "video"].includes(type) || !query) {
        return api.sendMessage(
            `⚠️ Please use the command like this:\n- media audio [song name]\n- media video [video name]`,
            event.threadID
        );
    }

    try {
        api.sendMessage(`🔎 Searching for "${query}"...`, event.threadID, event.messageID);
        api.setMessageReaction("🔍", event.messageID, () => {}, true);

        const result = await youtube.GetListByKeyword(query, false, 1);
        if (!result.items || result.items.length === 0) {
            return api.sendMessage('⚠️ No results found for your query.', event.threadID);
        }

        const video = result.items[0];
        const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;
        const cacheDir = path.join(__dirname, 'cache');
        if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);

        const endpoint = type === "audio"
            ? `http://152.42.220.111:25753/ytmp3?url=${encodeURIComponent(videoUrl)}`
            : `http://152.42.220.111:25753/ytmp4?url=${encodeURIComponent(videoUrl)}`;

        const response = await axios.get(endpoint, { timeout: 60000 });
        if (!response.data || !response.data.success || !response.data.download?.url) {
            return api.sendMessage(`⚠️ Failed to retrieve ${type} download link.`, event.threadID);
        }

        const { metadata, download } = response.data;
        const sanitizedTitle = metadata.title.replace(/[^\w\s]/gi, '').substring(0, 50);
        const extension = type === "audio" ? "mp3" : "mp4";
        const filePath = path.join(cacheDir, `${sanitizedTitle}.${extension}`);

        api.sendMessage(
            `⬇️ Downloading ${type}:\n🎵 Title: ${metadata.title}\n🎤 Artist: ${metadata.author?.name || 'N/A'}\n⏱️ Duration: ${metadata.duration?.timestamp || 'N/A'}`,
            event.threadID
        );

        const writer = fs.createWriteStream(filePath);
        const downloadResponse = await axios({
            url: download.url,
            method: 'GET',
            responseType: 'stream',
            timeout: 120000
        });

        downloadResponse.data.pipe(writer);

        await new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });

        const message = {
            body: `✅ Downloaded ${type.toUpperCase()}:\n\n` +
                `📛 Title: ${metadata.title}\n` +
                `👤 Author: ${metadata.author?.name || 'N/A'}\n` +
                `⏱️ Duration: ${metadata.duration?.timestamp || 'N/A'}\n` +
                `📡 Quality: ${download.quality || 'Unknown'}`,
            attachment: fs.createReadStream(filePath)
        };

        await api.sendMessage(message, event.threadID);
        api.setMessageReaction("✅", event.messageID, () => {}, true);

        // Clean up
        fs.unlink(filePath, (err) => {
            if (err) console.error("File deletion error:", err);
        });

    } catch (error) {
        console.error('Error:', error);
        api.setMessageReaction("❌", event.messageID, () => {}, true);

        if (error.code === 'ECONNABORTED') {
            api.sendMessage("❌ Request timed out. Please try again.", event.threadID);
        } else if (error.response?.status === 404) {
            api.sendMessage(`❌ ${type} not found or download service unavailable.`, event.threadID);
        } else {
            api.sendMessage("❌ An error occurred while processing your request.", event.threadID);
        }
    }
};