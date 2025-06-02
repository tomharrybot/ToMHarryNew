module.exports.config = {
	name: "morning",
     	version: "1.0.1",
	hasPermssion: 2,
	credits: "JORDAN", 
	description: " l.",
	commandCategory: ".",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("maya nalang")==0 || (event.body.indexOf("good morning")==0 || (event.body.indexOf("Good Morning")==0 || (event.body.indexOf("Morning")==0)))) {
		var msg = {
				body: "𝗚𝗼𝗼𝗗 𝗠𝗼𝗥𝗻𝗶𝗻𝗚 𝗠𝘆 𝗕𝗮𝗕𝗲 🙈 𝗛𝗮𝘃𝗲 𝗔 𝗡𝗶𝗖𝗲 𝗗𝗮𝘆 ❤️"
			}
			api.sendMessage(msg, threadID, messageID);
setTimeout(() => {
api.sendMessage({sticker: "162332973951561"}, threadID, messageID)
}, 3)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}