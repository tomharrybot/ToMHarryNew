const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "sendnoti",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "TruongMini, mod by Clarence-DK",
    description: "",
    commandCategory: "Tiện ích",
    usages: "[msg]",
    cooldowns: 5,
}

let atmDir = [];

const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/karachi").format("DD/MMM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `== User Reply ==\n\n『Reply』 : ${body}\n\n\nUser Name ${name}  From Group ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `== User Reply ==\n\n『Reply』 : ${body}\n\n\nUser Name: ${name} From Group ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `╭── •  𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 • ──♥︎╮\n       𝗙𝗿𝗼𝗺 𝗢𝘄𝗻𝗲𝗿  𓆩♥︎🅐мιяིྀི𓆪\n⧽⧽𝗠𝗲𝘀𝘀𝗮𝗴𝗲 : ${body}\n\nDate:${gio}\n╰♥︎──────────────╯`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `${body} MESSAGE FROM Owner \n name ${name} \nReply to this Message if you want to respond to this Announce.`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/karachi").format("DD/MMM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `╭── •  𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 • ──♥︎╮\n       𝗙𝗿𝗼𝗺 𝗢𝘄𝗻𝗲𝗿  𓆩♥︎🅐мιяིྀི𓆪\n⧽⧽𝗠𝗲𝘀𝘀𝗮𝗴𝗲 :  ${args.join(" ")}\n╰♥︎────────────────╯`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments,  `╭── •  𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 • ──♥︎╮\n       𝗙𝗿𝗼𝗺 𝗢𝘄𝗻𝗲𝗿  𓆩♥︎🅐мιяིྀི𓆪\n⧽⧽𝗠𝗲𝘀𝘀𝗮𝗴𝗲 : ${args.join(" ")}\n𝗗𝗮𝘁𝗲 ${gio}\n╰♥︎────────────────╯`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                         atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`Send to ${can} thread, not send to ${canNot} thread`, threadID);
                  }
