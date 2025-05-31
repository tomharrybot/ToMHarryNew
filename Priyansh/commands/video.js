const youtube = require('youtube-search-api');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "video",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "AMIR",
    description: "Download YouTube content as video",
    commandCategory: "Media",
    usages: "[videoTitle/artist]",
    cooldowns: 5,
    dependencies: {
      "node-fetch": "",
      "yt-search": "",
    },
  },

module.exports.run = async ({ api, event }) => {
    const input = event.body;
    const text = input.substring(7).trim();

    if (!text) {
        return api.sendMessage("⚠️ Please provide a title or name of the video.", event.threadID);
    }

    try {
        api.sendMessage(`🔎 Searching for "${text}"...`, event.threadID, event.messageID);
        api.setMessageReaction("🔍", event.messageID, (err) => {}, true);

        // Search YouTube for the video
        const result = await youtube.GetListByKeyword(text, false, 1);
        if (!result.items || result.items.length === 0) {
            return api.sendMessage('⚠️ No results found for your search query.', event.threadID);
        }

        const video = result.items[0];
        const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;

        // Fetch video info from the new API
        const apiUrl = `http://152.42.220.111:25753/ytmp4?url=${encodeURIComponent(videoUrl)}`;
        const response = await axios.get(apiUrl, { timeout: 10000 });

        if (!response.data || !response.data.success || !response.data.download || !response.data.download.url) {
            return api.sendMessage('⚠️ Could not retrieve video information from the server.', event.threadID);
        }

        const { title, thumbnail } = response.data.metadata;
        const downloadUrl = response.data.download.url;
        const quality = response.data.download.quality;
        const duration = response.data.metadata.duration.timestamp;
        const views = response.data.metadata.views.toLocaleString();
        const author = response.data.metadata.author.name;

        // Sanitize filename
        const sanitizedTitle = title.replace(/[^\w\s]/gi, '').substring(0, 50);
        const filePath = path.join(__dirname, 'cache', `${sanitizedTitle}.mp4`);
        const writer = fs.createWriteStream(filePath);

        try {
            const videoResponse = await axios({
                url: downloadUrl,
                method: 'GET',
                responseType: 'stream',
                timeout: 60000
            });

            videoResponse.data.pipe(writer);

            await new Promise((resolve, reject) => {
                writer.on('finish', resolve);
                writer.on('error', reject);
            });

            // Send the video
            await api.sendMessage({
                body: `🎥 Here's your video:\n\n` +
                      `📛 Title: ${title}\n` +
                      `👤 Author: ${author}\n` +
                      `⏱️ Duration: ${duration}\n` +
                      `👀 Views: ${views}\n` +
                      `🖼️ Thumbnail: ${thumbnail}\n` +
                      `📡 Quality: ${quality}`,
                attachment: fs.createReadStream(filePath)
            }, event.threadID);

            api.setMessageReaction("✅", event.messageID, (err) => {}, true);
        } catch (downloadError) {
            console.error('Download error:', downloadError);
            return api.sendMessage('❌ Failed to download the video. Please try again later.', event.threadID);
        } finally {
            // Clean up the file
            if (fs.existsSync(filePath)) {
                fs.unlink(filePath, (err) => {
                    if (err) console.error('Error deleting file:', err);
                });
            }
        }

    } catch (error) {
        console.error('Error:', error);
        api.setMessageReaction("❌", event.messageID, (err) => {}, true);
        api.sendMessage("❌ An error occurred while processing your request. Please try again later.", event.threadID);
    }
};