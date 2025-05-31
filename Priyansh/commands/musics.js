module.exports.config = {
  name: "music",
  version: "2.0.4",
  hasPermssion: 0,
  credits: "𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙",
  description: "Play music",
  prefix: true,
  usePrefix: true,
  commandCategory: "utility",
  usages: "music [your music title]",
  cooldowns: 5,
  dependencies: {
    "fs-extra": "",
    "request": "",
    "axios": "",
    "@distube/ytdl-core": "",
    "yt-search": ""
  }
};

module.exports.run = async ({ api, event }) => {
  const axios = require("axios");
  const fs = require("fs-extra");
  const ytdl = require("@distube/ytdl-core");
  const request = require("request");
  const yts = require("yt-search");

  const input = event.body;
  const text = input.substring(12);
  const data = input.split(" ");

  if (data.length < 2) {
    return api.sendMessage(`「 🎵 𝗠𝘂𝘀𝗶𝗰 🎵 」

𝐏𝐥𝐞𝐚𝐬𝐞 𝐄𝐧𝐭𝐞𝐫 𝐒𝐨𝐧𝐠 𝐍𝐚𝐌𝐞...`, event.threadID);
  }

  data.shift();
  const song = data.join(" ");

  try {
    api.sendMessage(`‎「 🎵 𝗣𝗿𝗼𝗰𝗲𝘀𝘀𝗶𝗻𝗴 🎵 」

𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐓 𝐒𝐨𝐌𝐞 𝐒𝐞𝐜𝐨𝐧𝐝𝐬..`, event.threadID);

    const res = await axios.get(`https://amir-all-in-1-apis-12bp.onrender.com/api/search/youtube?query=${encodeURIComponent(song)}`);

    const searchResults = await yts(song);
    if (!searchResults.videos.length) {
      return api.sendMessage("Error: Invalid request.", event.threadID, event.messageID);
    }

    const video = searchResults.videos[0];
    const videoUrl = video.url;

    const stream = ytdl(videoUrl, { filter: "audioonly" });

    const fileName = `${event.senderID}.mp3`;
    const filePath = __dirname + `/cache/${fileName}`;

    stream.pipe(fs.createWriteStream(filePath));

    stream.on('response', () => {
      console.info('[DOWNLOADER]', 'Starting download now!');
    });

    stream.on('info', (info) => {
      console.info('[DOWNLOADER]', `Downloading ${info.videoDetails.title} by ${info.videoDetails.author.name}`);
    });

    stream.on('end', () => {
      console.info('[DOWNLOADER] Downloaded');

      if (fs.statSync(filePath).size > 26214400) {
        fs.unlinkSync(filePath);
        return api.sendMessage('⚠ | ERROR The file could not be sent because it is larger than 25MB.', event.threadID);
      }

      const message = {
        body: `‎「 🎵 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗱 🎵 」

𝐇𝐞𝐫𝐞 𝐢𝐬 𝐘𝐨𝐮𝐫 𝐌𝐮𝐬𝐢𝐜 𝐄𝐧𝐉𝐨𝐲.💙
𝗖𝗿𝗲𝗱𝗶𝘁𝘀: 𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙`,
        attachment: fs.createReadStream(filePath)
      };

      api.sendMessage(message, event.threadID, () => {
        fs.unlinkSync(filePath);
      });
    });
  } catch (error) {
    console.error('[ERROR]', error);
    api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
};