module.exports.config = {
    name: "Propose",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "...",
    description: "5 বারের জন্য ক্রমাগত বন্ধুর ট্যাগ ট্যাগ করুন\nসেই ব্যক্তিকে আত্মা কলিং বলা যেতে পারে",
    commandCategory: "othre",
    usages: " please @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("You must @mention 1 person you want propose to", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Let's go");
setTimeout(() => {a({body: "سنو عزیز، میں تم سے بہت پیار کرتا ہوں۔🥰।" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "ایک بار تم سے بات نہ کروں تو میرا دل کیسے جانتا ہے☺️" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "یہ دماغ ہر وقت صرف تمہیں ہی کیوں ڈھونڈتا ہے۔" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "آپ کے خیالات میرے دماغ سے کبھی نہیں نکلیں گے 🙂\n کیونکہ آپ میرے خیالوں میں ہیں💚‎ " + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "جنت مجھے نہیں چاہیے کیونکہ میں نے تمہیں پایا\n\nخواب میں نہیں دیکھنا چاہتا کیونکہ تم میرا خواب ہو🥀🥰💚 " + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "جب سے تم آنکھوں میں بسی ہو،\n\nمجھے تمہارے سوا کچھ پسند نہیں❤️ " + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "جانے کیوں تم اتنی خوبصورت ہو کہ میں تمہیں دیکھ نہیں سکتا😻🥰💚 " + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "‎مجھے سمجھ نہیں آتی کہ میں تمہیں دیکھ کر اتنا اچھا کیوں محسوس کرتا ہوں۔💚 " + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "ایک چاہت ہے صرف آپکے ساتھ جینے کی\nورنہ محبّت توہ کسی کے ساتھ بھی ہو سکتی ہے🙈🥀🥰 " + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "اگر تمہیں لگتا ہے کہ تم خوش نہیں ہو تو تم میرے سینے میں لوٹ آؤ، میں تمہیں ساکت رکھوں گا!!💚 ।" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "میں ہمیشہ آپ کو یہاں یا وہاں اپنے ساتھ چاہتا ہوں۔⚜— -!!-।" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "༉༎༉😽!!لکیر تیرے لیے ہے، تیرے عشق کے ابدی جادو میں ڈوب گیا ہوں۔🙈 ༅༎•❤️🌸" + " " + name, mentions: arraytag})},31000);
setTimeout(() => {a({body: "دن کے آخر میں مجھے آپ کی ضرورت ہے۔😽" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a("~🖤میں تم سے آسمان کے برابر خواب کے ساتھ پیار کرتا ہوں۔়🐰🦋🥰")}, 39000);
setTimeout(() =>{a("میر اہاتھ تھام لو بس اتنا کافی ہے\nپھر خوشی ملے یا غم وہ میر انصیب")}, 47000);



  
}