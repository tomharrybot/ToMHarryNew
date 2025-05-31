module.exports.config = {
	name: "join1",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Leiam Nash",
	description: "Notify bots or people entering the group",
	dependencies: {
		"fs-extra": ""
	}
};
module.exports.run = async function({ api, event }) {

	const request = require("request");
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`𝗕𝗢𝗧 ${global.config.BOTNAME} 【 ${global.config.PREFIX} 】`, threadID, api.getCurrentUserID());
		return api.sendMessage(`𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱\n\n𝗻𝗼𝘄 𝘆𝗼𝘂𝗿 𝗴𝗿𝗼𝘂𝗽 𝗰𝗮𝗻 𝘂𝘀𝗲 𝗯𝗼𝘁\n\n𝗽𝗿𝗲𝗳𝗶𝘅: ${global.config.PREFIX}\n𝘂𝘀𝗲𝗿𝘀: ${global.data.allUserID.length}\n𝗴𝗿𝗼𝘂𝗽𝘀: ${global.data.allThreadID.length}\nplease use ${global.config.PREFIX}𝗿𝘂𝗹𝗲𝘀 for bot information\n\ndeveloper: Nica Neri`, threadID);
	}
	else {
		try {
    const request = require("request");
			const fs = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			
			var mentions = [], nameArray = [], memLength = [], i = 0;
			
    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var userName = data[obj].name.replace("@", "");     	if (userID !== api.getCurrentUserID()) {  
    
				nameArray.push(userName);
				mentions.push({ tag: userName, id: userID, fromIndex: 0 });
      
				memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = ` ╭──𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 • 𝗦𝗵𝗼𝗻𝗮──♥︎╮\n  {name}\n𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗛𝗲𝗿𝗲 ❤\n     𝗘𝗻𝗷𝗼𝘆 𝘄𝗶𝘁𝗵 𝗨𝘀🥰🥰\n╰♥︎────────────────╯` : msg = threadData.customJoin;
			msg = msg
			.replace(/\{uName}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);			

      var link = [
"https://i.imgur.com/pa2ZWhB.jpg",
"https://i.imgur.com/VaA0N6G.jpg",
"https://i.imgur.com/E49ptBn.jpg",
"https://i.imgur.com/VAYWAoS.jpg",
      ];
				var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashJ.jpg"), mentions }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashJ.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashJ.jpg")).on("close", () => callback());       
      	    }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
	}
                                                  }
