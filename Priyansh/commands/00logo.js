var hiro = "ATF-TEAM";
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "logo",
  version: "1.0",
  hasPermssion: 0,
  credits: `${hiro}`, 
  description: "Logo",
  commandCategory: "Logo",
  usages: "logos",
  cooldowns: 2,
};
//CREDITS CHARDS FOR THE API :)
module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;
  if (args.length < 2) {
    return api.sendMessage(`❖•━━━━━━━━━━━━━━━•❖\n☞ 𝗪𝗿𝗼𝗻𝗴 𝗨𝘀𝗲𝗱 ➺ 𝗘𝘅𝗮𝗺𝗣𝗹𝗲 ☜\n\n➥ ${global.config.PREFIX}𝗹𝗼𝗴𝗼 1 𝗔𝗠𝗜𝗥  ❥||ㅎ\n➥ ${global.config.PREFIX}𝗹𝗼𝗴𝗼 2 𝗔𝗠𝗜𝗥  ❥||ㅎ\n➥ ${global.config.PREFIX}𝗹𝗼𝗴𝗼 2 𝗔𝗠𝗜𝗥  ❥||ㅎ\n\n➥ 𝐓𝐨𝐓𝐚𝐥 𝐋𝐨𝐆𝐨𝐬 ❃ ➠ 》28《\n ❖•━━━━━━━━━━━━━━━•❖`, threadID, messageID);
  }
  let type = args[0].toLowerCase();
  let name = args.slice(1).join(" ");
  let pathImg = __dirname + `/cache/${type}_${name}.png`;
  let apiUrl, message;

  switch (type) {
    case "1":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/glasses?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
      break;
case "2":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/blackpink?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "3":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/greenbrush?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "4":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/neonblue?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "5":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/eraser?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "6":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/dragonfire?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "7":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/incandescent?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "8":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/typography?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "9":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/letters?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "10":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/cloth?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "11":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/metals?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "12":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/typography2?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "13":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/nightstars?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "14":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/cloud?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "15":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/caper?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "16":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/horror?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "17":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/sunlight?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "18":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/cake?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "19":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/hallowen?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "20":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/leafgraphy?text${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "21":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/foggy?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "22":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/arrow2?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "23":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/anonymous?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "24":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/aov?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "25":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/ml?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "26":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/warface?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "27":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/puppy?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
case "28":
      apiUrl = `https://amir-all-in-1-apis-12bp.onrender.com/api/ephoto/crank?text=${name}`;
      message = " ≪═════◄••❀••►═════≫\n  × •-⟮ 𝐘𝐎𝐔𝐑 𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 ⟯-• ×\n━━━━━❪  𓆩⃝𝐀𝐌𝐈𝐑𓆩๏𓆪 ❫━━━━━";
break;
default:
      return api.sendMessage(`Invalid logo type!`, threadID, messageID);
  }

  api.sendMessage("⫷  𝐏𝐥𝐙𝐳 𝐖𝐀𝐈𝐓 ❺ 𝐒𝐂𝐍𝐃𝐒  ⫸", threadID, messageID);
  let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
  let logo = response.data;
  fs.writeFileSync(pathImg, Buffer.from(logo, "utf-8"));
  return api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(pathImg),
    },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};