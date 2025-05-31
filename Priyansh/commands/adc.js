module.exports.config = {
    name: "adc",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "to the owner",
    description: "Apply code from buildtooldev and pastebin",
    commandCategory: "Admin",
    usages: "[reply or text]",
    cooldowns: 0,
    dependencies: {
        "pastebin-api": "",
        "cheerio": "",
        "request": ""
    }
};

module.exports.run = async function ({ api, event, args }) {
    const pogi = ["100000856538718"]
             if (!pogi.includes(event.senderID))
             return api.sendMessage("╭───────────♥︎╮\n➡➤𝐈 𝐂𝐀𝐍'𝐓 𝐀𝐋𝐋𝐎𝐖 𝐔\n➥Dont angry I give U\n➤ Kiss💋💋\n╰♥︎───────────╯", event.threadID, event.messageID);
    const axios = require('axios');
    const fs = require('fs');
    const request = require('request');
    const cheerio = require('cheerio');
    const { join, resolve } = require("path");
    const { senderID, threadID, messageID, messageReply, type } = event;
    var name = args[0];
    if (type == "message_reply") {
        var text = messageReply.body;
    }
    if(!text && !name) return api.sendMessage('╭───────────♥︎╮\n   ➤Replay To Only\n➥Link File "\n➥For saved That janu💖\n╰♥︎───────────╯', threadID, messageID);
    if(!text && name) {
        var data = fs.readFile(
          `${__dirname}/${args[0]}.js`,
          "utf-8",
          async (err, data) => {
            if (err) return api.sendMessage(`Command ${args[0]} does not exist!.`, threadID, messageID);
            const { PasteClient } = require('pastebin-api')
            const client = new PasteClient("R02n6-lNPJqKQCd5VtL4bKPjuK6ARhHb");
            async function pastepin(name) {
              const url = await client.createPaste({
                code: data,
                expireDate: 'N',
                format: "javascript",
                name: name,
                publicity: 1
              });
              var id = url.split('/')[3]
              return 'https://pastebin.com/raw/' + id
            }
            var link = await pastepin(args[1] || 'noname')
            return api.sendMessage(link, threadID, messageID);
          }
        );
        return
    }
    var urlR = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    var url = text.match(urlR);
    if (url[0].indexOf('pastebin') !== -1) {
        axios.get(url[0]).then(i => {
            var data = i.data
            fs.writeFile(
                `${__dirname}/${args[0]}.js`,
                data,
                "utf-8",
                function (err) {
                    if (err) return api.sendMessage(`╭───────────♥︎╮\n➤𝐄𝐚𝐫𝐫𝐨𝐫 𝐂𝐎𝐃𝐄\n➥but saved as "${args[0]}.js"\n➥Fix That janu💖\n╰♥︎───────────╯`, threadID, messageID);
                    api.sendMessage(`𓆩🅢ʜᴏɴᴀ巛😍ᯤᯱᯱᯱ࿐ ╭───────────♥︎╮\n➥Saved File\n➢${args[0]}.js\n➤Load Now Janu❤\n╰♥︎───────────╯`, threadID, messageID);
                }
            );
        })
    }

    if (url[0].indexOf('buildtool') !== -1 || url[0].indexOf('tinyurl.com') !== -1) {
        const options = {
            method: 'GET',
            url: messageReply.body
        };
        request(options, function (error, response, body) {
            if (error) return api.sendMessage('╭───────────♥︎╮\n≫Only Link Allow💖\n╰♥︎───────────╯', threadID, messageID);
            const load = cheerio.load(body);
            load('.language-js').each((index, el) => {
                if (index !== 0) return;
                var code = el.children[0].data
                fs.writeFile(`${__dirname}/${args[0]}.js`, code, "utf-8",
                    function (err) {
                        if (err) return api.sendMessage(`╭───────────♥︎╮\n➤Earror \n➦ while Saved As "${args[0]}.js"\n╰♥︎───────────╯`, threadID, messageID);
                        return api.sendMessage(`╭───────────♥︎╮\n   ➤𝐀𝐃𝐃𝐄𝐃\n➥Name "${args[0]}.js"\n➥Use Cmd to load janu💖\n╰♥︎───────────╯`, threadID, messageID);
                    }
                );
            });
        });
        return
    }
    if (url[0].indexOf('drive.google') !== -1) {
      var id = url[0].match(/[-\w]{25,}/)
      const path = resolve(__dirname, `${args[0]}.js`);
      try {
        await utils.downloadFile(`https://drive.google.com/u/0/uc?id=${id}&export=download`, path);
        return api.sendMessage(`╭───────────♥︎╮\n   ➤𝐀𝐃𝐃𝐄𝐃\n➥Name "${args[0]}.js"\n➥Use Cmd to load janu💖\n╰♥︎───────────╯`, threadID, messageID);
      }
      catch(e) {
        return api.sendMessage(`╭───────────♥︎╮\n    ➤𝐄𝐚𝐫𝐫𝐨𝐫 𝐂𝐎𝐃𝐄\n➥but saved as "${args[0]}.js"\n➥Fix That janu💖\n╰♥︎───────────╯`, threadID, messageID);
      }
    }
  }
