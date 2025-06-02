const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "hug",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "jordanofficial",
  usePrefix: false ,
  description: "hug the user tagged",
  commandCategory: "love",
  usages: "[Tag]",
  cooldowns: 5,
};


module.exports.run = async ({ api, event, args }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
    var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join("")) return out("Tish T0o TrNa Hug 🤗 Tag Tro 🙈");
  else
  return axios.get('https://nekos.life/api/v2/img/hug').then(res => {
        let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
        var mention = Object.keys(event.mentions)[0];
                  let tag = event.mentions[mention].replace("@", "");    

 let callback = function () {
            api.setMessageReaction("🙈", event.messageID, (err) => {}, true);
        api.sendMessage({
                    body: "Hug 🙈" + tag + "🙈\n\MmmMmmMmm 🤗 🫂 💜\n☆ 𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 ☆ ✦❥⋆⃝𝗔𝗠𝗜𝗥 ✦",
                                          mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
            attachment: fs.createReadStream(__dirname + `/cache/hug.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/hug.${ext}`), event.messageID)
        };
 //   }
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/hug.${ext}`)).on("close", callback);
      })
    .catch(err => {
                     api.sendMessage("Failed to generate gif, be sure that you've tag someone!", event.threadID, event.messageID);
    api.setMessageReaction("☹️", event.messageID, (err) => {}, true);
                  })     
}