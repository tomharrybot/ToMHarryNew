module.exports.config = {
    name: "xvideo",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Shiron (Modified by ChatGPT)",
    description: "Download video from xnxx.com",
    commandCategory: "video",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "axios": "",
        "request": ""
    }
};

module.exports.run = async ({ api, event, args }) => {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const { threadID, messageID } = event;

    try {
        const query = args.join(" ");
        if (!query) {
            return api.sendMessage("❌ Please enter an XNXX video link!", threadID, messageID);
        }

        const link = query.trim().split("|")[0];
        const res = await axios.get(`https://koja-api.web-server.xyz/xnxxdl?url=${encodeURIComponent(link)}`);
        const result = res.data?.result?.result;

        if (!result || !result.files?.low) {
            return api.sendMessage("❌ Couldn't fetch video data. The link might be invalid.", threadID, messageID);
        }

        const videoUrl = result.files.low;
        const title = result.title || "Unknown";
        const duration = result.duration || "N/A";
        const author = "ALI KOJA";

        const filePath = __dirname + "/cache/xvideo.mp4";
        const callback = () => {
            api.sendMessage({
                body: `🎬 Title: ${title}\n🕒 Duration: ${duration} sec\n👤 Author: FaRebii Amir`,
                attachment: fs.createReadStream(filePath)
            }, threadID, () => fs.unlinkSync(filePath), messageID);
        };

        request(videoUrl).pipe(fs.createWriteStream(filePath)).on("close", callback);
    } catch (err) {
        console.error(err);
        return api.sendMessage("❌ API error or expired key. Please try again later.", threadID, messageID);
    }
};
