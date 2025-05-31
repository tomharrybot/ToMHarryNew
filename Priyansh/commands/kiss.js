const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "kiss",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Jordanofficial",
  description: "love",
  commandCategory: "love",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://i.imgur.com/sF5d0M8.gif" , "https://i.imgur.com/P5dtRzS.gif" , "https://i.imgur.com/LSuDVFq.gif" , "https://i.imgur.com/omqj36f.gif" , "https://i.imgur.com/brC8WQR.gif" , "https://i.imgur.com/auZObCS.gif" , "https://i.imgur.com/BngVj10.gif" , "https://i.imgur.com/5KVoVyC.gif" , "https://i.imgur.com/fhdFvIK.gif"
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Tish T0o TarNi KiSs 🙈 Tag Kro 💉", threadID, messageID);
   var callback = () => api.sendMessage({body:`💞${tag}` + `💞\n Umumuaahhhhh💛💙💜❤️\n☆ 𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 ☆ ✦❥⋆⃝𝗝𝗢𝗥𝗗𝗔𝗡 ✦`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/spair.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/spair.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/spair.gif")).on("close",() => callback());
}