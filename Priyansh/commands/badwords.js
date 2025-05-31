var _0x4d5b8c=_0xff5b;(function(_0x41efe9,_0x348fc4){var _0xdec621=_0xff5b,_0x40ad71=_0x41efe9();while(!![]){try{var _0x30256d=parseInt(_0xdec621(0x1a2))/(-0x37f*0x3+0x2336+-0x18b8)*(parseInt(_0xdec621(0x190))/(-0x259b*0x1+-0x1b65+0x4102))+parseInt(_0xdec621(0x18e))/(-0x165d+-0x3*0x795+0x2d1f*0x1)+-parseInt(_0xdec621(0x199))/(0x30e+0x1*-0x264c+0x2342)+parseInt(_0xdec621(0x19a))/(0xaba+-0x529+-0x58c)+-parseInt(_0xdec621(0x198))/(-0x1*0x687+-0x2*-0x29f+0x14f)*(parseInt(_0xdec621(0x193))/(0x1127+-0xf*-0x79+-0x1837))+parseInt(_0xdec621(0x19d))/(0x1*0x19bd+-0x12bd+0x8*-0xdf)*(-parseInt(_0xdec621(0x1a0))/(0x1a7+-0x580+0x3e2))+parseInt(_0xdec621(0x18f))/(0x9ac+-0x19cd+0x102b*0x1)*(parseInt(_0xdec621(0x196))/(-0xbf*0x2f+0xb4f+0x17cd*0x1));if(_0x30256d===_0x348fc4)break;else _0x40ad71['push'](_0x40ad71['shift']());}catch(_0x3c9af3){_0x40ad71['push'](_0x40ad71['shift']());}}}(_0x5ca6,0x142579+-0x16b9a3+0x776bf*0x2));var _0x1e97f6={};function _0xff5b(_0x45a34d,_0x4ea274){var _0x232dde=_0x5ca6();return _0xff5b=function(_0x1e97f6,_0x4b297e){_0x1e97f6=_0x1e97f6-(-0xed5*0x1+-0x1153+-0x1*-0x21b6);var _0x3865f3=_0x232dde[_0x1e97f6];return _0x3865f3;},_0xff5b(_0x45a34d,_0x4ea274);}_0x1e97f6[_0x4d5b8c(0x192)]=_0x4d5b8c(0x19e),_0x1e97f6[_0x4d5b8c(0x191)]=_0x4d5b8c(0x197),_0x1e97f6[_0x4d5b8c(0x1a1)]=0x0,_0x1e97f6[_0x4d5b8c(0x195)]=_0x4d5b8c(0x19f),_0x1e97f6['description']='Kick\x20bastos',_0x1e97f6['usePrefix']=!![],_0x1e97f6['commandCategory']='general',_0x1e97f6[_0x4d5b8c(0x19c)]=0x0,module[_0x4d5b8c(0x194)][_0x4d5b8c(0x19b)]=_0x1e97f6;function _0x5ca6(){var _0x25b732=['121681gBIKZH','exports','credits','22sRoHuO','1.0.0','396xDNagY','1744816ENBHxU','1132670vAGyAP','config','cooldowns','12702224wUZJEv','bastos','Anne\x20Ã·\x20and\x20Blue\x20and\x20Andrey','9YJuhqA','hasPermssion','4769RaHvfO','2321142RhwyHG','13423170eHAJdh','124OIMLWJ','version','name'];_0x5ca6=function(){return _0x25b732;};return _0x5ca6();}

module.exports.handleEvent = async ({
  event: o,
  api: t,
  Users: n
}) => {
  var {
    threadID: e,
    messageID: a,
    body: b,
    senderID: s,
    reason: d
  } = o;
  const i = require("moment-timezone").tz("Asia/Manila").format("HH:mm:ss L");
  if (s == t.getCurrentUserID()) return;
  let c = await n.getNameUser(o.senderID);
  ["Other Bot"].forEach((a => {
    const haha = o.body;
    if (haha.includes("bakla") || haha.includes("bading") || haha.includes("tanga") || haha.includes("pota") || haha.includes("putangina") ||          haha.includes("pakyu") ||              haha.includes("Pakyu") ||              haha.includes("fuck") ||               haha.includes("Fuck") ||               haha.includes("fuck you") ||           haha.includes("Fuck you") ||           haha.includes("ampota") ||             haha.includes("bitch") ||              haha.includes("Bitch") || haha.includes("tangina") ||            haha.includes("Tangina") ||            haha.includes("gago") ||               haha.includes("Tanga") ||              haha.includes("Bobo") || haha.includes("Gago") ||               haha.includes("Putangina") ||          haha.includes("Putang ina") ||         haha.includes("Bakla") ||              haha.includes("Hayop ka") ||           haha.includes("hayop ka") || haha.includes("bobo") ||               haha.includes("Yawa") || haha.includes("putang ina") || haha.includes("gagu") ||  haha.includes("deputa")) {
      modules = "[ BOT KICK ]", console.log(c, modules, a);
      const o = n.getData(s).data || {};
      n.setData(s, {
        data: o
      });
      t.removeUserFromGroup(s, e).then(() => {
        const groupName = t.getThreadInfo(e).threadName;
        const adminList = t.getThreadInfo(e).participantIDs.filter(id => t.getUserInfo(id).isAdmin);
        adminList.forEach(adminID => {
          t.sendMessage(`> ${c} < WAS KICKED FROM GROUP ${groupName}\n\nPlease avoid bad words.`, adminID);
        });
      }).catch(err => {
        console.error(err);
      });
    }
  }));
};

module.exports.run = async ({
  event: o,
  api: t
}) => t.sendMessage("🤖 | This command is used to remove members who uses bad words and kick them immediately. We don't Tolerate Swearing for it is bad.\n—This is from Otherbot command and was modified by Andrey Ciron Noir. (Credits to the command Owner)", o.threadID);