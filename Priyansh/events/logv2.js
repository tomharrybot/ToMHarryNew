module.exports.config = {
    name: "logv2",
    eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
    version: "1.0.0",
    credits: "Mirai Team",
    description: "Record bot activity notifications!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Users, Threads }) {
    let data = (await Threads.getData(event.threadID)).data || {};
    let threadInfo = await api.getThreadInfo(event.threadID);
    threadName = threadInfo.threadName;
    if (data.log == false) return;
    const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
    let botID = api.getCurrentUserID();
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Karachi").format("D/MM/YYYY HH:mm:ss");
    const nameUser = global.data.userName.get(event.author) || await Users.getNameUser(event.author);
    var formReport =  "\n🌸===[ 𝐁𝐨𝐭 𝐍𝐨𝐭𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧 ]===🌸" +
                      "\n\n👨‍👩‍👧‍👧 𝗕𝗼𝘅: " + threadName +
                      "\n🔰 𝗜𝗗 𝗯𝗼𝘅: " + event.threadID +
                      "\n🤷‍♀️ 𝘂𝘀𝗲𝗿𝗜𝗗: {task}" +
                      "\n🍳 𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲: " + nameUser +
                      "\n⚡ 𝗜𝗗: " + event.author +
                      "\n⏰ 𝗧𝗶𝗠𝗲: " + time + "",
        task = "";
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || "uff",
                    newName = event.logMessageData.name || "Name does not exist";
            task = "User changes group name from: '" + oldName + "' wall '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == botID)) task = "The user added the bot to a new group !";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId == botID) {
          if(event.senderID == botID) return;
          const data = (await Threads.getData(event.threadID)).data || {};
          data.banned = true;
          var reason = "[🌸] Kick bot freely, without permission 🚫";
          data.reason = reason || null;
          data.dateAdded = time;
          await Threads.setData(event.threadID, { data });
          global.data.threadBanned.set(event.threadID, { reason: data.reason, dateAdded: data.dateAdded }); task = "The user kicked the bot out of the group !"
          }
            break;
        }
        default: 
            break;
    }
    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);

    return api.sendMessage(formReport, global.config.ADMINBOT[0], (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
}