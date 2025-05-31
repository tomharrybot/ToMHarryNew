module.exports.config = {
  name: "hi",
  version: "1.0.0",
  hasPermssion: 0,
  credit: "Trúc cute :)",
  description: "hi gửi sticker",
  commandCategory: "Hệ Thống",
  usages: "[text]",
  cooldowns: 0, 
  envConfig: {
		autoUnsend: true,
		delayUnsend: 10
}
}

module.exports.handleEvent = async ({ event, api, Users }) => {
  let KEY = ["hello",
    "hi",
    "hai",
    "chào",
    "chao",
    "hí",
    "híí",
    "hì",
    "hìì",
    "lô",
    "hii",
    "helo",
    "hê nhô"];
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["hi"] == "undefined", thread["hi"] == false) return
  else {
  if (event.body && KEY.includes(event.body.toLowerCase()) !== false) {
    let data = [
      "178518209293200","551710548197410","377001555779238","180555742437408"
               ];
    let sticker = data[Math.floor(Math.random() * data.length)];
    let moment = require("moment-timezone");
    let hours = moment.tz('Asia/karachi').format('HHmm');
    let data2 = [
      "tốt lành",
      "vui vẻ"
    ];
    let text = data2[Math.floor(Math.random() * data2.length)]
    let session = (
    hours > 0001 && hours <= 400 ? "Mid-night" : 
    hours > 401 && hours <= 700 ? "Good-morning" :
    hours > 701 && hours <= 1000 ? "Morning" :
    hours > 1001 && hours <= 1200 ? "Afternoon" : 
    hours > 1201 && hours <= 1700 ? "Evening" : 
    hours > 1701 && hours <= 1800 ? "Eve" : 
    hours > 1801 && hours <= 2100 ? "Night" : 
    hours > 2101 && hours <= 2400 ? "Night" : 
    "lỗi");
    let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    let msg = {body: ``, mentions}
    api.sendMessage(msg, event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 100)
    }, event.messageID)
  }
      }
}

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": `${this.config.name} thành công`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
}

module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["hi"] == "undefined" || data["hi"] == true) data["hi"] = false;
  else data["hi"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["hi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}