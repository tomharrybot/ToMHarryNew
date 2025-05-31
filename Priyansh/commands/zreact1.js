module.exports.config = {
	name: "autoreact",
	version: "1.1.1",
	hasPermission: 0,
	credits: "John Lester",
	description: "Bot React",
	commandCategory: "No Prefix",
	cooldowns: 0,
};
const fs = require("fs");
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("haha") || react.includes("HAHA") || react.includes("😃😃") || react.includes("😂😂😂") || react.includes("bot") || react.includes("Bot") || react.includes("BOT") || react.includes("👍") || react.includes("✌") || react.includes("🖐") || react.includes("shit") || react.includes("🤣🤣🤣") || react.includes("lol") || react.includes("LOL") || react.includes("😂😂") || react.includes("😀") || react.includes("😀😀") || react.includes("😁") || react.includes("😁😁") || react.includes("😃😃") || react.includes("😃") || react.includes("😃😃😃") || react.includes("😄") || react.includes("😄😄") || react.includes("😅") || react.includes("😅😅") || react.includes("😅😅😅") || react.includes("😆") || react.includes("😂") || react.includes("😉😉") || react.includes("🍭") || react.includes("😹") || react.includes("🤣") || react.includes("😊") || react.includes("🤓") || react.includes("😊😊") || react.includes("🤥🤥") || react.includes("🤗") || react.includes("😇") || react.includes("😇😇") || react.includes("😶") || react.includes("🙄") || react.includes("🙄🙄") || react.includes("🙄🙄🙄") || react.includes("😏") || react.includes("😏😏") || react.includes("🤔") || react.includes("🤔🤔") || react.includes("🤔🤔🤔") || react.includes("🤣🤣") || react.includes("🤣🤣🤣") || react.includes("😲😲") || react.includes("😝") || react.includes("😛") || react.includes("😜") || react.includes("😬") || react.includes("😹😹") || react.includes("🧐") || react.includes("🤫") || react.includes("🤢") || react.includes("😝") || react.includes("🤭") || react.includes("🤭🤭") || react.includes("😤") || react.includes("🙈🙈") || react.includes("🙉🙉") || react.includes("🙊🙊") || react.includes("🙊") || react.includes("👦") || react.includes("🙀🙀") || react.includes("🙀") || react.includes("😺") || react.includes("😸") || react.includes("😹😹😹") || react.includes("🤷") || react.includes("🙏") || react.includes("🙏🙏") || react.includes("🙋") || react.includes ("🤦") || react.includes("🙆") || react.includes("💃") || react.includes("💃💃") || react.includes("💃💃💃") || react.includes("🏃") || react.includes("💏") || react.includes("👩‍❤️‍💋‍👨") || react.includes("👨‍❤️‍💋‍👨") || react.includes("💪") || react.includes("🤳") || react.includes("👈👈") || react.includes("👉👉") || react.includes("☝☝") || react.includes("👆👆") || react.includes("👇👇") || react.includes("✌") || react.includes("✌✌") || react.includes("🤞") || react.includes("🤞🤞") || react.includes("🖖") || react.includes("🤘") || react.includes("👊")) {
    var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
          };
    if(react.includes("mahal") || react.includes("Mahal") || react.includes("Love") || react.includes("love") || react.includes("lab") || react.includes("lab") || react.includes("😊") || react.includes("ilove") || react.includes("Ilove") || react.includes("iLove") || react.includes("ilab") || react.includes("iLab") || react.includes("Ilab") || react.includes("labyu") || react.includes("Labyu") || react.includes("kiss") || react.includes("Kiss") || react.includes("yie") || react.includes("kwass") || react.includes("Kwass") || react.includes("krass") || react.includes("Krass") || react.includes("crush") || react.includes("crush") || react.includes("ligawan") || react.includes("kilig") || react.includes("fuck") || react.includes("Fuck") || react.includes("Kinikilig") || react.includes("Kilig") || react.includes("😗") || react.includes("😙") || react.includes("😘") || react.includes("😚") || react.includes("ugh") || react.includes("Ugh") || react.includes("sige pa") || react.includes("Sige pa") || react.includes("sarap") || react.includes("Sarap") || react.includes("sex") || react.includes("Sex") || react.includes("☺") || react.includes("porn") || react.includes("Porn") || react.includes("kantotan") || react.includes("Kantotan") || react.includes("Iyotan") || react.includes("Iyutan") || react.includes("iyotan") || react.includes("iyutan") || react.includes("pasend") || react.includes("Pasend") || react.includes("Iyut") || react.includes("Iyot") || react.includes("iyot") || react.includes("iyut") || react.includes("eut") || react.includes("Eut") || react.includes("eut") || react.includes("😍") || react.includes("shet") || react.includes("Shet") || react.includes("send") || react.includes("Send") || react.includes("baby") || react.includes("Baby") || react.includes("babe") || react.includes("Babe") || react.includes("babi") || react.includes("Baby") || react.includes("bby") || react.includes("Bby") || react.includes("kantot") || react.includes("Kantot") || react.includes("manyak") || react.includes("libog") || react.includes("Libog") || react.includes("horn") || react.includes("Horn") || react.includes("abno") || react.includes("Abno") || react.includes("malibog") || react.includes("labs") || react.includes("Labs") || react.includes("pekpek") || react.includes("Pekpek") || react.includes("pepe") || react.includes("Pepe") || react.includes("🤭") || react.includes("🥰") || react.includes("puke") || react.includes("Puke") || react.includes("bilat") || react.includes("Bilat") || react.includes("puday") || react.includes("Puday") || react.includes("finger") || react.includes("Finger") || react.includes("fifinger") || react.includes("pipinger") || react.includes("Pipinger") || react.includes("pinger") || react.includes("Pinger") || react.includes("mwah") || react.includes("Mwah") || react.includes("mwuah") || react.includes("Mwuah") || react.includes("halikan") || react.includes("Halik") || react.includes("Marry") || react.includes("j0rdan") || react.includes("😇") || react.includes("🤡")) {
      var lab = {
				body: ""
			}
			api.sendMessage(lab, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
          };
    if(react.includes("sakit") || react.includes("Sakit") || react.includes("saket") || react.includes("Saket") || react.includes("peyn") || react.includes("Peyn") || react.includes("Pain") || react.includes("mamatay") || react.includes("Mamatay") || react.includes("ayaw ko na") || react.includes("Ayaw ko na") || react.includes("saktan") || react.includes("Saktan") || react.includes("Sasaktan") || react.includes("sasaktan") || react.includes("sad") || react.includes("Sad") || react.includes("dafa ho") || react.includes("kick") || react.includes(" 😥") || react.includes("😰") || react.includes("😨") || react.includes("😢") || react.includes("Marja") || react.includes("😔") || react.includes("😞") || react.includes("depress") || react.includes("stress") || react.includes("Stress") || react.includes("Depress") || react.includes("depression") || react.includes("Depression") || react.includes("kalungkutan") || react.includes("Kalungkutan") || react.includes("😭")) {
      var sad = {
				body: ""
			}
			api.sendMessage(sad, threadID, messageID);
    api.setMessageReaction("😿", event.messageID, (err) => {}, true)
          };
    if(react.includes("Maderchod") || react.includes("maderchod") || react.includes("bc") || react.includes("Bc") || react.includes("chutia") || react.includes("Chutia") || react.includes("bhenchod") || react.includes("Bhenchod") || react.includes("😾") || react.includes("mc") || react.includes("🤬") || react.includes("😡") || react.includes("😠")) {
      var heart = {
				body: ""
			}
			api.sendMessage(heart, threadID, messageID);
    api.setMessageReaction("😡", event.messageID, (err) => {}, true)
                }
        }
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }