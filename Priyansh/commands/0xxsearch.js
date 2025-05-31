module.exports.config = {
    name: "xxxsearch",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Modified by DanishGPT",
    description: "Search xxx videos and get list of results.",
    commandCategory: "video",
    cooldowns: 0,
    dependencies: {
        "axios": ""
    }
};

module.exports.run = async ({ api, event, args }) => {
    const axios = global.nodemodule["axios"];
    const { threadID, messageID } = event;

    try {
        const query = args.join(" ");
        if (!query) return api.sendMessage("🔍 Please enter a keyword to search for videos.", threadID, messageID);

        const res = await axios.get(`https://koja-api.web-server.xyz/xnxxsearch?text=${encodeURIComponent(query)}`);
        const data = res.data;

        if (!data.success || !data.results || !data.results.result.length) {
            return api.sendMessage("❌ No results found. Try a different keyword.", threadID, messageID);
        }

        let msg = `🔞 Search Results for: ${query}\n👤 Creator: AMiR\n\n`;
        data.results.result.slice(0, 10).forEach((video, index) => {
            msg += `${index + 1}. ${video.title}\nℹ️ ${video.info.trim()}\n🔗 ${video.link}\n\n`;
        });

        return api.sendMessage(msg.trim(), threadID, messageID);

    } catch (err) {
        console.error(err);
        return api.sendMessage("⚠️ An error occurred or the API is down.", threadID, messageID);
    }
};
