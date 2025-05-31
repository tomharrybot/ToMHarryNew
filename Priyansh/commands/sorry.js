module.exports.config = {
    name: "sorry",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "... - Long LTD",
    description: "War nát cái boxchat",
    commandCategory: "group",
    usages: "bold war",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("I'm So So Sorry");
setTimeout(() => {a({body: "Maf Kardo Pls" })}, 3000);
setTimeout(() => {a({body: "please"})}, 5000);
setTimeout(() => {a({body: "please 🥺" })}, 7000);
setTimeout(() => {a({body: "please 😞" })}, 9000);
setTimeout(() => {a({body: "I Know I'm So Late" })}, 12000);
setTimeout(() => {a({body: "I Know I'm Care less" })}, 15000);
setTimeout(() => {a({body: "But The Thing Is" })}, 17000);
setTimeout(() => {a({body: "Mujhe Sab Pata Tha" })}, 20000);
setTimeout(() => {a({body: "M Agar Chahta Toh Subha Hi Bol Sakta tha" })}, 23000);
setTimeout(() => {a({body: "Lekin M Buddhu Tha Nhi kiya" })}, 25000);
setTimeout(() => {a({body: "Mujhe Pata nhi Tha Kuch Aisa Hoga" })}, 28500);
setTimeout(() => {a({body: "Lekin Kya kare Mera Luck Hi Kharab ha" })}, 31000);
setTimeout(() => {a({body: "Please Bura Mat Mano" })}, 36000);
setTimeout(() => {a({body: "Aur Dher Sara Enjoy karo aj" })}, 39000);
setTimeout(() => {a({body: "Ajj Tumhe Happy Rehna Chaiye" })}, 40000);
setTimeout(() => {a({body: "So, Apna Face pe Smile Rakkho" })}, 65000);
setTimeout(() => {a({body: "Aur Har Waqt Haste Rao" })}, 70000);
setTimeout(() => {a({body: "Mere Sath Hamesha Raho" })}, 75000);
setTimeout(() => {a({body: "Khush Raho Tum" })}, 80000);
setTimeout(() => {a({body: "Jaan plz na" })}, 85000);
setTimeout(() => {a("Maano na")} , 90000);
setTimeout(() => {a({body: "Please Ma Sorry Krta Hu Janu " })}, 95000);
setTimeout(() => {a({body: "My Dear Janu" })}, 100000);
setTimeout(() => {a({body: "Upar Wala Apko Hamesha kHush RaKhy" })}, 105000);
setTimeout(() => {a({body: "I'm So So Sorry Dear Good Bye🥺💖"})} , 115000);




  
  }
