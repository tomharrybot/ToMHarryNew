//ko dc share dmm
module.exports.config = {
    name: "adminUpdate",
    eventType: ["log:thread-admins", "log:thread-name", "log:user-nickname", "log:thread-icon", "change_thread_image", "log:thread-call"],
    version: "1.0.0",
    credits: "ATF-TEAM",//inspire by presel
    description: "GROUP UPDATE NOTIFICATION"
};

module.exports.run = async function ({ event, api, Threads, Users }) {
    const { author, threadID, logMessageType, logMessageData } = event;
    const { setData, getData } = Threads;
    const axios = require('axios');
  const moment = require("moment-timezone");
  var time = moment.tz("Asia/Karachi").format('HH:mm:ss');  var ngay = moment.tz("Asia/Karachi").format('D/MM/YYYY');
  var thu = moment.tz('Asia/Karachi').format('dddd');
  if (thu == 'Sunday') thu = 'Sunday'
  if (thu == 'Monday') thu = 'Monday'
  if (thu == 'Tuesday') thu = 'Tuesday'
  if (thu == 'Wednesday') thu = 'Wednesday'
  if (thu == "Thursday") thu = 'Thursday'
  if (thu == 'Friday') thu = 'Friday'
  if (thu == 'Saturday') thu = 'Saturday'
    
    if (author == threadID) return;
    
    try {
        let dataThread = (await getData(threadID)).threadInfo;
      console.log(logMessageData)
        switch (logMessageType) {
            case "log:thread-admins": {
                if (logMessageData.ADMIN_EVENT == "add_admin") {
                    dataThread.adminIDs.push({ id: logMessageData.TARGET_ID })
                   var msg = `•—⚉—≕⌨ 𝗨𝗣𝗗𝗔𝗧𝗘𝗦 ⌨≔—⚉—•\n\n➥ USER ADD ${logMessageData.TARGET_ID} ADMIN AS GROUP ADMIN ⧕\n\n[ ✪ ]─⏣ ToDay is : ${thu} ⧕\n[ ✪ ]─⏣ DaTe : ${ngay} ⧕\n[ ✪ ]─⏣ TiMe : ${time} ⧕`
                }
                else if (logMessageData.ADMIN_EVENT == "remove_admin") {
                    dataThread.adminIDs = dataThread.adminIDs.filter(item => item.id != logMessageData.TARGET_ID);
                    var msg =`•—⚉—≕⌨ 𝗨𝗣𝗗𝗔𝗧𝗘𝗦 ⌨≔—⚉—•\n\n➥ REMOVE ADMIN RIGHTS OF\n ➥${logMessageData.TARGET_ID} ⧕\n\n[ ✪ ]─⏣ ToDay is : ${thu} ⧕\n[ ✪ ]─⏣ DaTe : ${ngay} ⧕\n[ ✪ ]─⏣ TiMe : ${time} ⧕`
                }
                break;
            }

            case "log:user-nickname": {
                dataThread.nicknames[logMessageData.participant_id] = logMessageData.nickname;
                var msg =`•—⚉—≕⌨ 𝗨𝗣𝗗𝗔𝗧𝗘𝗦 ⌨≔—⚉—•\n\n➥ ${(logMessageData.nickname.length == 0) ? `TO REMOVE NAME ${logMessageData.participant_id}` : `➥NAME UPDATE \n${logMessageData.participant_id} \n➥ : ${logMessageData.nickname}`} ⧕\n\n[ ✪ ]─⏣ ToDay is : ${thu} ⧕\n[ ✪ ]─⏣ DaTe : ${ngay} ⧕\n[ ✪ ]─⏣ TiMe : ${time} ⧕`
                break;
            }

            case "log:thread-name": {
                dataThread.threadName = event.logMessageData.name || null;
                var msg =`•—⚉—≕⌨ 𝗨𝗣𝗗𝗔𝗧𝗘𝗦 ⌨≔—⚉—•\n\n➥ ${(dataThread.threadName) ? `➥ UPDATE GROUP NAME ${dataThread.threadName}` : '➥ GROUP NAME DELETED'}.\n\n[ ✪ ]─⏣ ToDay is : ${thu} ⧕\n[ ✪ ]─⏣ DaTe : ${ngay} ⧕\n[ ✪ ]─⏣ TiMe : ${time} ⧕`
                break;
            }

            case "log:thread-icon": {
                dataThread.threadIcon = event.logMessageData.thread_icon || "👍";
                var msg =`•—⚉—≕⌨ 𝗨𝗣𝗗𝗔𝗧𝗘𝗦 ⌨≔—⚉—•\n\n➥ UPDATE GROUP EMOJI ${dataThread.threadIcon},\n\n[ ✪ ]─⏣ ToDay is : ${thu} ⧕\n[ ✪ ]─⏣ DaTe : ${ngay} ⧕\n[ ✪ ]─⏣ TiMe : ${time} ⧕`
                break;
            }

            case "change_thread_image": {
              console.log(logMessageData)
                var msg =`•—⚉—≕⌨ 𝗨𝗣𝗗𝗔𝗧𝗘𝗦 ⌨≔—⚉—•\n\n➥ ${author} UPDATED GROUP PICTURE ⧕\n\n[ ✪ ]─⏣ ToDay is : ${thu} ⧕\n[ ✪ ]─⏣ DaTe : ${ngay} ⧕\n[ ✪ ]─⏣ TiMe : ${time} ⧕`
                break;
            }

            case "log:thread-call": {
                if (logMessageData.event == "group_call_started") {
                    const name = await Users.getNameUser(logMessageData.caller_id);
                    var msg =`•—⚉—≕⌨ 𝗨𝗣𝗗𝗔𝗧𝗘𝗦 ⌨≔—⚉—•\n➥ ${name} START A ${(logMessageData.video) ? '𝐕𝐈𝐃𝐄𝐎' : ''}𝐂𝐀𝐋𝐋 `
                }
                else if (logMessageData.event == "group_call_ended") {
                    const callDuration = logMessageData.call_duration;

                    //Transform seconds to hours, minutes and seconds
                    let hours = Math.floor(callDuration / 3600);
                    let minutes = Math.floor((callDuration - (hours * 3600)) / 60);
                    let seconds = callDuration - (hours * 3600) - (minutes * 60);

                    //Add 0 if less than 10
                    if (hours < 10) hours = "0" + hours;
                    if (minutes < 10) minutes = "0" + minutes;
                    if (seconds < 10) seconds = "0" + seconds;

                    const timeFormat = `${hours}:${minutes}:${seconds}`;

                    var msg =`•—⚉—≕⌨ 𝗨𝗣𝗗𝗔𝗧𝗘𝗦 ⌨≔—⚉—•\n\n ${(logMessageData.video) ? '𝐕𝐈𝐃𝐄𝐎 ' : ''}➥ CALL ENDE\n\n➥ CALL DURATION : ${timeFormat}\n\n[ ✪ ]─⏣ ToDay is : ${thu} ⧕\n[ ✪ ]─⏣ DaTe : ${ngay} ⧕\n[ ✪ ]─⏣ TiMe : ${time} ⧕`
                    
                }
                else if (logMessageData.joining_user) {
                    const name = await Users.getNameUser(logMessageData.joining_user);
                    var msg =`•—⚉—≕⌨ 𝗨𝗣𝗗𝗔𝗧𝗘𝗦 ⌨≔—⚉—•\n\n➥ ${name} JOINED ${(logMessageData.group_call_type == '1') ? '𝐕𝐈𝐃𝐄𝐎' : ''}𝐂𝐀𝐋𝐋\n\n[ ✪ ]─⏣ ToDay is : ${thu} ⧕\n[ ✪ ]─⏣ DaTe : ${ngay} ⧕\n[ ✪ ]─⏣ TiMe : ${time} ⧕`
                }
                break;
            }
        }
        const res = (await axios.get('https://vnhhoang206-16.vnhoang06.repl.co/api/gif/gifchill')).data.data
        const t = (await axios.get(`${res}`, {
                    responseType: "stream"
                }))
                .data;
        await setData(threadID, { threadInfo: dataThread });
        api.sendMessage({
        	body: msg,
        	attachment: t
        }, threadID)
    } catch (e) { console.log(e); };
}