module.exports.config = {
name: "Auto-Greetings",
version: "10.02",
hasPermssion: 0,
credits: "tromoxx",
description: "Auto-greetings All box",
commandCategory: "Auto-Greet by Amir",
usages: "[]",
cooldowns: 3
};
const nam = [{
timer: "4:00:00 PM",
message: ['===「 𝐀𝐔𝐓𝐎𝐆𝐑𝐄𝐄𝐓 」=== \n\nTHIS BOT IS MADE BY MR AMIR !!!\n\nAuto-Greet by Amir.!!!'] ,
}];
module.exports.onLoad = o => setInterval(() => {
const r = a => a[Math.floor(Math.random()*a.length)];
if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};