const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usePrefix: false,
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("hh:mm:s");
  const hours = moment.tz("Asia/Karachi").format("hh");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["kali kali zulfon k phandy na dalo Heer burka smbhalo, bhai stand utha lo🙂🚶", "Lips  kissing is not Romance It's sharing Bacteria>>>🙂", "💸💚🖇️Tm Propose kr k to dekho qabul  krny ki zimedari merii - 🙂🫣_", "~ Piyawr Hameshw Aalsii InsaN sw kwr0 mUjhei aby neend  ary hai baki Kl Bta0 gw 🙂🔪", "𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂", "*Ghr məıın - عـــزت noi werna Admii thy hum bhi kam kə'w -' ♡🖇️😞*😒", "🦋🍒____________🙂🎀پتہ لگا تینوں شوق لتراں دا🤝🏻🔐🫰🏻", "Suno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈", "Khud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓", "Love me 💕", "Hi mujY Farebiiw Amir ne baNaYa hY 🙂", "Kᴀʜᴀɴɪ Sᴜɴᴏ !😔 Zᴜʙᴀɴɪ sᴜɴᴏ !😔Mᴜᴊʜʏ Bᴜᴋʜᴀʀ Hᴏᴡᴀ Tʜᴀ'ᴡ 😔 )Eᴋ sᴏ Cʜᴀᴀʀ Hᴏᴡᴀ Tʜᴀ'ᴡ 🥺💔:)", "- 𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂", "𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒", "SharaM kr0'w LarKiy0' mujhe aaj AnTii ne propose Kar Diiy4'w ___/////😞🍁☠️🌸", "Imagine I am your Ex 🥲say whatever you want to say", "-😁🎗_ZeHer banaNa sikH raHiii hUn😂👀 BuS iskO trY karnY waLa cHaHiye _💔🙄😹", "I love You Madiha♥️ ,fatima,Ayesha, Maryam,and 299 others 🙂", "Hye ye Cute Cute DpiYa  Unke peeche'w Chhupii MoTii Kalii AnTiiYa 🙂🍁", "°Mein واقعی Piyaara Hun Ya Log چونا Lagaty hain-🙂💔","Ittuu🤏 si shram ker Lya kro bot bot krty wqt 🙂 💔✨⚠️†", "Ary Yahin Hon Jan😗", "jiee Shona 😍", "Love you", "Miss YoU NaW Inna sara👌🏻👌🏻", "To mera putar chutti kr", "OkkaY Babbu", "😁Smile I am Taking Selfy✌️🤳", "🥺Jan nahi kehna to men naraz ho jana he", "Jesay Yaad Karne Se Hi Mood Kharab Hojaye Ek Aisa Fazool Khayal Ho Tum", "Main ap ki ami ko btaou ga ap Facebook use kerty ho 😂", "#__LaLa__LaLa__Lori #__Koi___Chori__Set__Ni__HoRRI", ,"Bhai Wese Ldki Patane Ka Trick Btao Na Bada Din Ho Gya Single Hu ;🙂" ,"Ufff aap Ki اداٸیں😗 Chaly Shabas Apna'w munh Dho kY aye'w..]] . 🙂✨//. 🦋🍒)" ,"Suno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈","𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒","Jab tk mein single hun yeh bh meri hai wo bhi meri ha Tum kia parh rahi tum bh meri ho😒❤🙂" ,"𝗜𝘁𝗡𝗮 𝗦𝗶𝗻𝗴𝗟𝗲 𝗛𝘂 𝗞 𝗝𝗮𝗻 𝗕𝗵𝗶 𝗹𝗶𝗸𝗛o to 𝗔𝘂𝘁𝗼 𝗖𝗼𝗿𝗿𝗲𝗰𝘁 𝐣𝐚𝐩𝐚𝐧 𝐤𝐫 𝐝𝐞𝐭𝐚 𝐡𝐚" ,"kxh LoGon Ki TyPing.. Ase LiKha Aa Rha HoTa Hai Jse WasiHat LiKh Rhy H0on 😒0or RePly ATa Hai Hmmmm 😂" ,"Baz DaFa JaWab DeNy Ke LiYe alFaz Nhi 👉😒 Ase SaQal He KaFi H0oTi Hai 😹" ,"YaKeen KRren Kxh L0og Bread Ke 1 Slice Ke TarHan H0oTy Hain j0o Kisi K0o Axhy Nhi LagTy Tum W0o Slice H0o 🫢🫣😂" ,"JeSe Aap Ki ZuBan ChalTi Hai Wse KhuD ChLo T0o MoTaPay Ka RoNa Na DalNa Pre 😂" ,"MeRi PosT PRr aYa KRro Main Kbhi Kbhi MehB0ob K0o MuThi Me kRrNy Ke Tawiz Be BTaTa Hun 😜" ,"KTny WaHaYaT H0o 🥺 Phr Be HaYaT H0o 🤭😹😹😹" ,"SaNnu ilam aa Tu BaRi VaDDi Film aa 😅" ,"ApNy DiMag Ka PaSsWord DeNa 😝 Aqal Install kRrNi Hai 😂" ,"Phr Aaj KaL KiSs Ke SaTh ChaKar Hai Uh Ka 😂😂😂" ,"➝𝗚𝗶𝗿𝗹𝘀 𝗶𝗻 𝗠𝗮𝗿𝗸𝗲𝘁: ➝𝗪𝗼 𝗕𝗹𝗮𝗰𝗸𝗗𝗿𝗲𝘀𝐬𝗗𝗲𝗸𝗵𝗮𝗡𝗮➝𝗕𝐨𝐲 𝗶𝗻 𝗠𝗮𝗿𝗸𝗲𝗧:➝𝗪𝗼 𝗕𝗹𝗮𝗰𝗞 𝗗𝗿𝗲𝘀𝘀 𝗪𝗮𝗹𝗶 𝗗𝗲𝗸𝗛🙂🤝" ,"➝𝗧𝘂𝗺 𝗪𝗼𝗛𝗶 𝗵𝗢 𝗡𝗮➝𝗝𝗶𝘀 𝗞𝗶 𝗩𝗼𝗶𝗰𝗲 𝗕𝗲𝗲𝗵𝗸𝗮𝗥𝗶𝗼 𝗝𝗮𝘀𝗶 𝗛𝗮𝗶-^☘️🙂" ,"Ek pyare s Bandi ko Mention karo 🙂🤝Set may khudh karlonga🌚🙈🌸" ,"➝𝗞𝘂𝗰𝗛 𝗱𝗶𝗻 𝗕𝗮𝗱 𝗠𝗲𝗿𝗮 𝗡𝗶𝗸𝗸𝗮𝗛 𝗛𝗮𝗶➝𝗝𝗶𝘀 𝗻𝗬 𝗞𝗿𝗻𝗮 𝗛𝗮𝗶 𝗔 𝗷𝗮𝗬🙂🤝" ,"تـیـری بیـوفـائـی نـے مجھـے ٹھـرکـی بنـا دیـا😞" ,"تم تو شکـل سے ہی میـری لگتـی ہو🥺" ,"➝𝗗𝘂𝗻𝗶𝗬𝗮 𝗸 𝗦𝗮𝗥𝘆 𝗠𝘇𝗮𝗞 𝗘𝗸 𝗧𝗮𝗿𝗮𝗳 𝗢𝗿➝𝗜𝗗 𝗖𝗮𝗿𝗱 𝗽𝗬 𝗔𝗽𝗻𝗶 𝗣𝗵𝗼𝘁𝗼 𝗘𝗸 𝗧𝗮𝗿𝗮𝗳🥹💔" ,"Dil De Diya Hen Gurda Nahi Dengy, Jo Karna Hai Karlo Sanam 👀😌" ,"Main chAhta hun ky Woh jab B Dhoka kHae nOtificationS mujhe Ayee🙂💔" ,"اپنے پتیلے جیسے منہ سے میرا نام مت لیا کرو🙂" ,"Tum wahi ho naww jessy apna blood group bhi nahi pata ^^..🙂" ,"All Girls Are My Sisters Osko Chor k jo ye Parh RaHi Hai😒👍" ,"Boys Sana, Laiba, Aliza, Sadia, Maham Zoya ishu ayzal or Ayesha py Mar ky bhi Trust na krna🌚" ,"➝𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗛𝗶𝗽 𝗔𝗿𝗲 𝗟𝗶𝗸𝗲 𝗖𝗮𝗸𝗲➝𝗝𝗶𝘁𝗻𝗮 𝗕𝗵𝗶 𝗖𝘂𝘁𝗲 𝗛𝗼 𝗞𝗮𝘁𝗬 𝗚𝗮 𝗭𝗿𝗼𝗿🙂🤝" ,"Koi Ladki Mera Name hath pw likh dy🤝🙂 Me phr uski dp lga k Cool lgo ga" ,"️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan","Karlo Meri Jaan" ,"kbi sun to zra jo me keh na ska meri dunya tmi o tmi ashraa" ,"kahni sno zubani suno mjy payar howa tha iqrar howa tha" ,"kash ap humry hoty ye lafz tumry hoty" ,"𝐚𝐠𝐫 𝐛𝐧𝐝 𝐡𝐨 𝐣𝐚𝐲𝐞 𝐠𝐢 𝐦𝐞𝐫𝐢 𝐬𝐚𝐧𝐬𝐲 𝐭𝐦𝐲 𝐭𝐞𝐫𝐢 𝐤𝐮𝐬𝐡𝐛𝐨 𝐬𝐚 𝐩𝐞𝐜𝐡𝐚𝐧 𝐥𝐨 𝐠𝐚" ,"lahor da pawa akhter lawa" ,"AK br biwi mil jaye Run mureedi k sary record Tor deny hn....🙂💔😐" ,"➝𝗭𝗶𝗻𝗱𝗮𝗚𝗶 𝗺𝗮𝗶𝗻 𝗔𝗴𝗥 𝗸𝘂𝗖𝗵 𝗧𝗵𝗘𝗲𝗸 𝗖𝗵𝗮𝗟 𝗥𝗮𝗛𝗮 𝘁𝘂\n\n➝𝗪𝗼 𝗠𝗲𝗿𝗮 𝗠𝗼𝗯𝗶𝗟𝗲 𝗛𝗮𝗶🙂🍒", "➝𝗠𝗮𝗺𝗮 𝗢𝗿 𝗦𝗻𝗮𝗽𝗰𝗵𝗮𝘁\n\n➝𝗕𝘀 𝗬𝗲𝗛𝗶 𝗺𝗨𝗷𝗵𝘆 𝗣𝗶𝗬𝗮𝗿𝗶 𝗦𝗺𝗷𝗵𝘁𝘆 𝗛𝗻🙂🥺", "ہسیا کر تے ہسایا کر ، چوسنی ورگا منہ نا بنایا کر", "-Kitna  مــــــــنہوس ha YaAr online ate he Nazar a jata ha 😒⚠️†", "+92 _____________HasEen LrkiyA KhaLi JGa Pur kArEin🌚🙂" , "Aeh, Bi, Chi, Di, Ee, Ef, Ji, Eich, Ai, Lub, You, So, Much 🙂🥺", "𝙎𝙝𝙖𝙙𝙞 𝙠𝙖 𝙨𝙝𝙤𝙦 𝙣𝙝𝙞 𝙝𝙖 𝙢𝙪𝙟𝙮 𝙗𝙖𝙨 𝙙𝙪𝙡𝙝𝙖 𝙗𝙖𝙣'𝙣𝙮 𝙠𝙖 𝙨𝙝𝙤𝙦 𝙝𝙖*(🥺", "پیار محبّت سب فضول تو چلی گئے تو تیری سہیلی قبول ہ", "Logo ki bestie hoti he Meri bezzati hoti he 🙂💔", "People who daily react to my posts I'll invite you to my marriage! 🤍🫶", "-Block Your ‘’ gf ‘’ And Purpose me.❤️🙂🖤🥀🔪", "- 𝘼𝙪𝙧 𝙗𝙖𝙩𝙖𝙤 𝙩𝙬𝙢 𝙬𝙤𝙝𝙞 𝙝𝙬 𝙣𝙖𝙬 𝙟𝙞𝙨𝙚𝙮 𝙠𝙤𝙞 𝙢𝙪𝙣 𝙣𝙤𝙞 𝙡𝙖𝙜𝙖𝙩𝙖𝙬 🥹;", "𝘗𝘩𝘢𝘴 𝘨𝘢𝘺𝘢 𝘮𝘯 𝘣𝘩𝘪 𝘵𝘦𝘳𝘺 𝘉𝘦𝘢𝘶𝘵𝘺 𝘛𝘳𝘢𝘱 𝘮𝘯 🥺💝", "Kash siNGLe HONY k paisy MILTY to mn sab sY ameer HOTA😓", "غلامــــی صـٓــــرف بیگـــَــم دی  🚶-", "Jawn❤️I'm waiting for your text..🙂🙉", "Ek bestie to ma b deserve karta Hun ❤😁🙉",  "بات عزت کی تھی ورنہ آج سڑک پہ پڑا دس کا نوٹ بلکل اصلی تھا🥺🌿", "فاصلہ رکھیں👀\n\nپیار تو ہونا نہیں خوامخواہ لڑائی ہو جائے گی😒😬", "محبت کرو تو انباکس میں اکیلے اکیلے🙄\n\nاور رونا دھونا  پورے Facebook میں۔۔۔واہ رے پلاسٹک کے عاشقو🙁", "•سنو لڑکیو🙋\n\nسفید ڈریس پر لال لپ اسٹک لگاتی ہو💄 قسم سے ایمبولینس لگتی ہو😂", "اگر یہ❤️   ہے\n\nتو پھر یہ 🫀 کیا ہے.", "وہ روز کہتی تھی ہم بھاگ جائیں گے🙈\n\nاور پھر وہ بھاگ گئ مجھے لے جانا بھول گئ😥", " غیر کی دِل میں اگر اُترنا تھا  تو میرے دِل سے اُتر گئے ہوتے ۔ 💔🙂", "makeup kya hai mard hi k paiso se mard hi ko bewakoof banane ki sazish🤝🙂", "𝘚𝘜𝘕𝘖 𝘒𝘕 𝘚𝘈 𝘔𝘖𝘋𝘌𝘓 𝘏𝘖 \n𝘔𝘌 :2002🦋🥴🖤", "عورت بڑا سا بڑا دُکھ بھول سکتی ہے\n\nلیکِن پڑوس میں گیا برتن نہیں 💯😁", "💫✨💙Tazab Piyo Zindagi Jiyo✍️🙂","لفظوں میں اتنا زہر کہا سے لاتے ہو لگتا ہے سانپ کا زہر پی کے آتے ہو","وہ ہمیں بے شرم کہتے ہے تو کہتے رہے فراز امی کہتی ہی جو کہتا ہے وہ ہی ہوتا ہے🤣","دل کرتا ہے تمھے دعا میں مانگو پر ڈر لگتا ہے کہی سچی میں نہ پلے پر جاؤ🤣","Pyar Karne Se Pehlay Pyar Ka Anjaam Dekh Lo Agar Phir Bhi Samjh Na Aaye TouFilm Tere Naam Dekh Lo","Kabhi Roti Ke Tukron Mein Kabhi Salan Ke Payale Mein Teri Zulfon Ka Dedaar Begum Har Nawale Mein","Jis Nay Jald Baazi Mein Ki Shadi Unse Apni Jawani Barbaad Ki Aur Jisne Soch Samjh Karki Unse Konsa Teer Maar lia ha","🔨 جسgirl boy نے منہ پے ڈمپل بنوانا ہے رابطہ کرے","جن کو بہت برا لگتا ہوں نا میں 🥺وہ بھی مجھے کوئی چینی والا پراٹھا نہیں لگتے 🙄😏🙃","کاش بلاک کی جگہ ہلاک کا آپشن ہوتا😂میں ہر روز دو، چار پھڑکا دیتی 🤧🤣😒","اگر دل ٹوٹے 💔 تو میرے پاس چلے آ نا🚶  مجھے میرے جیسے لوگوں سے محبت ہے💯","مجھے بدتمیز کہتے ہیں 😏یہ ڈیٹول سے دھلے لوگ😒","باپ چاہتا ہے بیٹا پائلٹ بنے ماں چاہتی ہے بیٹا انجنیئر بنے اور بیٹا فیسبک پر شُمائلہ بنا ہوا ہے 😂🤣😂","جلدی آن لائن ہو جایا کرو😛😛😉😉آدھی بیٹری تو تمہارا انتظار کرتے کرتے ختم ہو جا تی ہے","تم بدلو تو مجبوری ہم بدلیں تو بے وفائ مطلب۔ ہماری خارش کُھرک اور تمہاری خارش اسکن انفیکشن🤣🤣🤭🤣🤭","دل کرتا ہے سب کو چوڑیاں لادوں🙊پر فیر تسی ٹھرکی سمجھ لینا اے 🤣😔😜","اُستاد: وہ کون سا باز ہے جو اڑ نہیں سکتا ..؟میں : لونڈے باز 🙂","*بھینس🐂 سےانڈے🥚 کی امید رکھ لو لیکن کراچی کی لڑکی سے Wafa کی امید نا رکھنا😏☹️💔*","‎وہ لڑکی اور آنٹی میسج کرے  جس نے آج تک فائزہ بیوٹی کریم استعمال نہ کی ہو دیکھنا اب کوئی نہیں آئے گی‎","‏تمہاری چمی شمی لیلوں کوئی مسئلہ تو نہیں۔۔۔؟🤭"," Teacher: any questions? Me: Kyun kisi ko wafa ke badly wafa nahi milti😕😂","سنگل رہنےکا فاہدہ نہ رونا،نہ دھونانہ شونا،نہ مونانہ آدھا،نہ پونابس کھانا اور سونا","گرمی گواہ اے چٹا رنگ تباہ اے خیر سانوں کی اے  ساڈا کہڑا عیدوں بعد ویا ہ اے🤣🤣","تھوڑی سی منگنی ہو جاتی تو عید کا جگاڑ لگ جاتا😂🙈،،🤟","مجھے روزانہ یہ الفاظ ہمت دیتے ہیں لَا تَحْزَنْ اِنَّ اللّٰهَ مَعَنَا۔🍂غم نہ کرو، بیشک اللّٰہ ہمارے ساتھ ہے🇵🇰🇵🇰❤️❤","‏دودھ میں شَکر نہیں، 😶میرا کسی کے ساتھ چکر نہیں دودھ میں شکر پاؤ 😒مینوں وی کوئی پھساوُ","لوگوں کی تعریف کرو تو وہ شرما جاتے ہیں میری کوئی تعریف کرے تو مجھے یقین ہی نہیں ہوتا__!🙄👻🙆ہاۓےےے رےےےے میری معصومیت☺🙈🥰","جس  لڑکی کو تمام مردوں سے بات کرنے کا چسکا پڑجاے وہ کسی ایک مرد کی نہیں ہوتی😌🤷‍♂️💔","میری پوشٹ تے وی آ جایا کڑو 😒میں کیہڑا پھڑ کر ویاہ کر لینا🙂","کہتے ہیں جب ہاتھ مے خارش ہو پیسے آتےہیں اب  میرے دل مے خارش ہورہی اسکا کیا مطلب ہے 🤣","اچھے دوست تکیہ کی طرح ہوتے ہیں مصیبت میں سینے سے لگا لوتنہائی میں سر رکھ لواور غصہ میں لات مار دو 😂❤️","Daulat shohrat nahi chahiye Eidi chahiye sirf🙂🤝🏻","زندگی ایک ہی بار ملتی ہے اسے کزنوں کے ساتھ شادی کر کے برباد مت کرنا🤭🤣","Waldain se barh k is duniya main kuch nahi hai,so,Jaldi se shadi waldain ban jayen..Rishta wohi soch nayi 😅😅😅😅","سوچ رہا ہوں تھوڑا وزن بڑھا لوں. 🧸بہت ہلکے میں لے رہا ہے یہ گروپ والے مجھے 🤨😓","کچھ لوگوں کے کرتوت دیکھ کر لگتاہ ہے شیطان ہوم ورک دے کے گیا ہوا ہے😀😀","دیکھنا ھے تو پیار سے دیکھو😍😍😉🙈🙈غصے سے تو مجھے ، گھر والے بھی دیکھتے ہیں😔🙈😁🤣🙈🙈🙈🙈","100 میں سے 90 نمبر لینے پر امی سے ڈانٹ پڑی ، اُن کا ماننا تھا کہ 0 میں نے خود سے لکھا ہے 😕👉جبکہ میں نے صرف 9 خود سے لکھا تھا 🥹👉","نکاح میں آؤ گے تو عشق بھی کر لیں گے..😍یوں حرام محبت ہم سے نہیں ہوتی..😊","💞حاصل ہو جائے تو عزت کرنا ✨💞✨نہ ملے تو بنت حوا  کو بدنام نہ کرنا 😑","کل امی اورخالہ کےساتھ بازارگیا۔3گھنٹے 20دکانیں گھومنے کےبعد1سوٹ لیااور آج ہم نےوہ سوٹ واپس کرنےجاناہے. ","تیرے چاہنے والے بڑھ گئے 💓اب ہمارا خاموش رہنا ہی بہتر ہے ۔","حضرات جس جس کو میری شادی میں آنا ہے وہ ہرنماز کے بعد میری شادی کی دعاکرے.......😂😂😂🙊🙊  شکریہ...🤭😜🙈🙈😛😛🙈","لڑکوں کی دعاوں سے فرشتے بھی حیران ہوتے ہونگےکہ یہ پچھلےرمضان عائشہ کو مانگ رہا تھا اورر اس سال فائزہ کو🤯😜🤣😂🤣🌚","وہ لوگ جن سے درجن کیلے منگوا کر گھر والے گن رہے ہوتے ہیں کہیں راستے میں کھا تو نہیں گیا وہ بھی لڑکیوں کو انباکس میں کہہ رہے ہوتے ہیں 🤣جانو ٹرسٹ می🙄","تم میری ہو جاو🙈😉تمھارے نخرے ایسے اٹھاوں گا جیسےبلی چوزہ اٹھاتی🙈😍🙈","✨❤   ؒ خو د کو کھو نے کا پتہ ہی نہیں چلا کسی کو پا نےکیلئے یو ں انتہا کر دی ہم نے۔.....","دل مل کر بچھر گیا🤕تشریح  ۔شاعر انبکس جاتے ہی بلاک ہو گیا😜 😁","مجھے کھانا کھانے کے بعد بھوک نہیں لگتی 🙊کہیں مجھے پیار تو نہیں ہو گیا ہے، 😳😱🤔🙈","*کسی کُڑی کی ہینڈ رائٹنگ اچھی ہے**تو میرا نام ہی ہاتھ پہ لکھ دے**مجھے ڈی پی لگانی ہے 😍🙈😂*","‏کوئ کشی کا نہیں ہوتا مڑششششد  شاڑے کوڑ مارتے ہیں کوڑ 😕😬🙉","دهيرے دهيرے سے ميرى زندگى ميں آنا آتے هوئے کچھ کھانے کو بھى ليتے آنا","اُٹھو سارے🥺گروپ میں چوری ہو گئی ہے ہائے میرا Eid ke shopping 🛍️ آلا شاپر کوٸی لے گیا جے😫☹️😂😂","مہمانوں کے جو بچے تنگ کرتے ہیں😒کھبی سائیڈ پے لے جا کے ان کی سروس کی ہے😂😂😂😂😂😂😂😂","اے میری پوسٹ پہ دوڑ کے آنے والے😍😍جا تیری اسی سال شادی ہو جائے_😁😂🤪🥱🥺 ♥️🤣😜🤫🙈😂","‏میری مچھروں سے نہایت مودبانہ گزارش ہے🤔 ‏کاٹنا ہے تو کاٹو..🙄.. یہ کانوں میں *بھیں* *بھیں* کرنے والی کیا بغیرتی ہے😂🤣🙈🙊","سلام کے بہانے جا کر مہمانوں کی گنتی کرنا بھی پاکستانی لڑکیوں کا ٹیلنٹ ہے","اب ہم خاموش نہیں رہے گےچیخ چیخ  کر کہے گےعید آگئ میرا یار نی آیا😂...😍...😂","پاکستانیوں کپڑے شپڑے تیار رکھنا پھر نہ کہنا 12وجے کیہڑا چن چڑھ گیا اے😁","شُنو!😍میلی  post😜اگنور نہ تیا تروشوٹا شا دل ہے میلاتوت جاتا ہے🥹🥹🤭","پلیز جلدی جلدی بتاؤ کہ لسی کو انگلش میں کیا کہتے ہیں ایک گوری کہ معدے میں گرمی ہو گئی اس کو بتانا ہے کہ یہ پیو","وہ کُن فرمائے گا✨❤️  اور تم گرتے گرتے سنبھل جاؤ گے 😊°اِنَّ رَبِّیِ یَفْعَلُ مَا یَشَاَءُ°بیشک میرا رب جو چاہے کر سکتا ہے❤💫",".میری پوسٹ پر آجایا کرو ورنہ😇😯میں نے  group پہ پانی ڈال کر بجلی کی تاریں گرا دینی ہیں.🙈😂 😁","ایک وقت تھا ⌚جب مجھے یہاں کوئی نہیں جانتا تھا 😏اللہ کا کرم ہے دیکھیں ❤🙃آج بھی مجھے کوئی نہیں جانتا","میرے پاس سے گزر گئ میرا حال تک نہ پوچھا 😢😢آپ پریشان مت ہوں وہ مجھے جانتی ہی نہ تھی 😜😜","ہاتھ سے گرتا موبائل پکڑ لو 🤭😂🤭تو ایسا لگتا ہے آدھی دنیا بچا لی ہے😂🤭😂","ہمیں دوسری محبت ان لوگوں سے ہو جاتی ہے جنہیں ہم پہلی محبت کا قصہ سنا رہے ہوتے ہیں 🖤😒🙆‍♀️🙏","یہ جو دو چار  لڑکیاں ہیں میری پوسٹ پر آتی ہیں اگر ان میں سے کوئی ایک میری زندگی میں آجاتی تو میرا گھر بھی بس جاتا😛🙈","روزے ختم ہونے والے ہیں ☹جس نے مجھے دعاؤں میں مانگنا ہے 🤲مانگ لے 😋🙈❤😁پھر نہ روتے پھرنا 😂😂🙈","کھوتے جِنّا قد اے تیرا تے عقل گِٹّیاں وِچ🙂😹","میری روح کا پرندہ پھڑپھڑاے جب میرا موبائل گھر والوں کے ہاتھ میں نظر آے😁😁","‎🌏♥️🌸🌙 ایسے ضروری ہو مُجھ کو تم جیسے ہوائیں سانسوں کو۔😚❤️   🥺🦋‎","*ہم ناراض سمجھتے رہے، آپ تنگ تھے ہم سے *•_🥀🕊️✨*","‏وہ ایک شخص حمایت اگر کرے میری🍁 میں دو جہاں کو بتاؤں کہ عشق ایسے ہوتا ہے🍂","حالات دیکھ کر ایسے لگ رہا ہے 😕کہ عید رمضان کے بعد ہی ہوگی 🤪","اس کی کلائی کپڑے دھونے کے قابل نہیں ہے🙅یہ سوچ کر دو ہفتے ایک ہی سوٹ پہنا کرونگا میں🙆","تمھارے  والے  کا میسج نہیں آ رہا تو میں کر دوں 🥺🥺 😝😝","دعا ہے😉ہر محبت کی منزل Breakup💔 ہو آمین 😂 ساڈا نہیں تے کسی ہور دا وی نہیں 💔😂😂😎","شُنو!😍میلی  post😜اگنور نہ تیا ترو شوٹا شا دل ہے میلا توت جاتا ہے🥹🥹🤭","بیوفائی تک تو ٹھیک تھا..😒 لیکن جاتے جاتے اپنی سہیلیوں سے بھی بلاک کروا گئی😣🙄🤒 ","حکومتی مسئلوں سے زیادہ مُشکل ہے...!! تُمہارے بال سنوارنا..","😂چھوڑ دیا مرشد لڑکیوں پہ لائن😂😂 مارنا_ 😒😒جس کو نیک شوہر کی ضرورت 🙈🙈🙈ہوگی_😎🤦‍♂️_خود ہی انباکس آ جائیگی_😜😁🙈😁۔","‏ہم وہ محروم تمنا ہيں کہ بھری دنيا ميں ، اپنے حصے کی محبت بھی نہيں کر پائے🌚🥀","کاش مُجھے بھی کوئی کہتا تُم گروپ میں آیا کرو تمہارے یاد میں میرے گُردے سکڑ جاتے ہیں 😒😒","مجھے ایسا کیوں لگتا ہے کہ میں تم سے پٹ جاؤں گا😑😑","سنا ہے شادی کے بعد بچے بھی ہوتے ہیں ","فاصلہ رکھیں-بد بو آتی آپ سے 🙈👻👻","سوشل میڈیا کا عشق اور پڑوسیوں کی بریانی دنوں ایک جیسی ہیں ۔۔۔۔ ملتا کچھ بھی نہیں سوائے مزے مزے والی خوشبو کے","آنکھوں میں صابن ڈال لینا لیکن کسی سے روز بات کرنے کی عادت نہ ڈالنا🤣🤭🙈🙄🙊","میں آلو والےپراٹھے بھی بنا لیتا ہوں چاے بھی بنا لیتا ہوں ہانڈی بھی بنا لیتا ہوں سن ری ہو نہ تم","وے مولیا ۔۔۔۔اینا نو دس میں سنگل آں 🙂","والدین: ہماری بیٹی ڈاکٹر بنے گی لے بیٹی : Ummmmmah اب سر درد کیسا ہے جانو 🙂😛🤣","تم مجھے سمنبھال کر رکھا کرو۔۔۔۔🥺😌🥰🫣🫣❤️❤️میری پھو پھو مجھے تم سے چرانے پر تلی ہیں۔۔۔🥺🤭😤😐","جتنا میں گروپ میں ایکٹیو ہوتا ہوں✌🏻کاش اتنا اگر محلے میں ہوا ہوتا 😁😁تو آج سنگل نہ ہوتا 🤭🤣😜🙈🙈","میرا مقصد کسی کو ہرٹ کرنا نہیں ہوتا😢😔 میرا مقصد صرف جینا حرام کرنا ہوتا ہے 😂😂","⸙  میرا واٹس ایپ نمبر ⸙😂😂زیرو تین سو پندرہ 😂،پانچ سو تیرا،پانچ سو اسکاm😂😂پانچ سو میرا 😂😕😐","Meri gf hoti to mai v usse bt krta aaj puri rt time hi time hai 🤭🤭", "Aao tmhare sath relationship post laga ke tmhe Femous kr du😊", "EK QUESTION HAI SABHI SE BTAO MAI ACHA LGTA HU YA MERI MEMES 🙈😾🤤", "Chakar arhy hein apki Ib ma aa k gir jaun>>🥺🚶🏻‍♀️", "Mout ka farishta ya Mera  rishta?🙂❤️🙊•", "Wife k sath date pe gya tha \nJis ki thi usne dhek lya", "_ Sab ko loyal bnda chahiye tw hum dhokebaz kidhar jayen? 🥺💔", "WhatsApp k last seen k elwa mera koi or scene nai hai🙂", "Hai Tamna TumhY ChaHt sy Girayn🙂",  "Finally es group kee do teen  larkiya mujH pasanD agai Hai🚶‍♂😪🌚", "میرا دل یہ پکارے آجا پیچھے والے مقام میں 🤝🙂🤞", "Suno👀\n\nKya tum mery leye surf kha kar muu sy bulbly nikal skti ho🙂🫴", "- GhUlabii آنــکھیں jh0 terii dekhii Harami Yevw Dill h0 Gya   3; 🙂 😆", "- مجھــــــے کیـــــا مــــیں تــــو سنــــگل ہــــوں 😒", "Dil ko krar Aya khud pa Pyr aya😒🙈😂", "Ehsaas kryn Bakwas nahi, Janam 🥺Shukria_😊🙆‍♂️", "Bs yar daily 3 4 crore ki zarorat mahsos Hoti hai 😂", "Begum walaw مــــــوســـــم ho rahaw haii aj to 🙂", "Shkl insani, soch ibleesi\n\nHnji apki hee ", "تـــــم میــــری بیگـــــم بنو گی کیا -🥺🖤", "LARKIO KAY BHI MAZAY HAY🥴 \nNO BRAIN NO TNSN⛑🔪⚡", "تمہارے حصے کی چُمیاں مچھر لے رہے ہیں.🙂💔", "Sirf Maggie noodles bna'ny sy Ghar nahi chalta SHABANA..🙂💔", "Wp pa add hona chahty ha apky sath ☺️💔", "- کھاؤ قسم تمہارے پاؤں کالے نہیں۔۔!!👣🙄", "Meny fail hokr bhi dekha hai Ye log shadi nh kraty 🙂💔", "Or batao kb ayga tumahara dill mujhe py😌🥺", "bht bura hu na mai? bhiin dedo apnii🙂", "Pyari Pyari ladkiyan Hazir Ho jay😁", "Kisi k pss لاش wali dp h tw send krein janu replY nahi de rhy..!", "MerKo abhi tk pink clr ki gf nh meli 😒🥺🙂💔:⁠-⁠)", "میرے مولا ایک thrkii بچــی yess کروا دے..🙂", "ایک kiss ادهار دے دو 💋\nکل واپس کردوں گا پکّا 😝", "Ajeeb ghr wale hain yr, mera phone 28% pr nikal kr apne 90% ko charge karte 𝐡𝐚𝐢𝐧-🌚", "Lagta hai mery sabar k phal  ka koi juice bna k pee gya..😐", "Dil Dany ki Umar ma  Exam's  Dy raha hoo 🙂🤝", "Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi halal hai ya Haram ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki  wahan tharki😒", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Breakup k waqT kE dUa \n\n( KHUSH RAHEIN ) 🙂", "Thora sa Whatsapp number dy do naw🥺♥️", "لوٹ آؤ اور کہدو کہ \nمیں لسی پی کے سو گئی تھی😫", "Kuch Log achy ki Talaash Mein Mery Jaisy Masoom ko kho dety Hain☺️", "Tum wohi ho na jiska mood bilawaja khrab hojata h...!!!🙂", "Pyari pyari larkio ki talash ma berozgar larky add krliye hain 🥲💔", "Jab mera Message aye toh sare kaam chor kar sirf Mujhe reply kia karo😾😒", "Or Btao Real Life Ma bh itnyy Achy ho jitny social media per Bntyy ho>>🙂", "Pakistani Relationship:\nTum Feel Kro Meh Tumary uper hun 😒💔", "Us k jany k bd uski Pasnd ki Nail Polish lgaa k khana khata hu aesw lgta ha jesy wo khela rhee ha😒", "Be a Good Human.Delete GB Whatsapp💔🙂", "2 Din Pyar sy Baat kr loo tou Ammiyan bn  jatii hain🙂😒", "Girls after One Mint of Relationship...\nBegam hu mn apki🙂🤦", "Larkiyon ko achy sy pta hai kahan -Bhai- Bolna kaha -Ap- or kaha -Tum- 🙂", "Aaj mein ny Khud ko TV py dheka \n\nJab Tv Band Tha 🙂", "Qadar krlo Meri...\nKya pta Main b Panadol ki trha aik dam shaat hojun😒", "Naraz bandy ko manany ka sab sy acha tareka Ap khud us sy naraz hojaoo🙂🐣", "Jaisi meri shakal hai kunwara he marunga🙂👀", "میں نے جس دن سکول میں پہلی پوزیشن حاصل کی میں اسی دن سمجھ گیا تھا کے یہ ملک کبھی ترقی نہیں کر سکتا😐😐", "یقین کریں میٹرک کے پیپر بہت آسان ہیں.میں نے خود سات دفعہ دیئے ہیں😐", "Itni memories mere khud dimagh mai nahi hai jitni Snapchat ny bna rkhi hai", "Chakki Chakki Meko Is Mulk Sy Bahir Nikal 🥹"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye")) {return api.sendMessage("ChaL NiKaL 🙄", threadID);
   };

  if ((event.body.toLowerCase() == "inbox") || (event.body.toLowerCase() == "ib")) {
     return api.sendMessage("️ KYa IB IB 👿 Idher BOL MeRe SaMny ", threadID);
   };

   
   if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "babu")) {
     return api.sendMessage("️🙈🙉🙊", threadID);
   };
  
   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "admin")) {
     return api.sendMessage("My Owner AestHetic bOy Amir🖤", threadID);
   };
if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simi")) {
     return api.sendMessage("Sim Sim Na KRr IjjaT Sy MeRa Prefix LaGa 0or Bt kRr ITna Free Nhi kRta Me 😎🤞", threadID);
   };

   if ((event.body.toLowerCase() == "amy") || (event.body.toLowerCase() == "amyy")) {
     return api.sendMessage("Amy Amy Na KRr IjjaT Sy MeRa Prefix LaGa 0or Bt kRr ITna Free Nhi kRta Me 😎🤞", threadID);
   };

   if ((event.body.toLowerCase() == "tharki bot") || (event.body.toLowerCase() == "Bot tharki")) {
     return api.sendMessage("Tu TharKi Tra Bap TharKi TeRa DaDa TharKi 🤬🤗", threadID);
   };

   if ((event.body.toLowerCase() == "lanti bot") || (event.body.toLowerCase() == "lanti hai")) {
     return api.sendMessage("Aby Chuuu Tu LanTi Le KaB0ol kRr 🖐️🐾👣", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bhenchod")) {
     return api.sendMessage("Tu Hai Bc 🙂 Main T0o BoT Hun 😂😂😂 ", threadID);
   };

   if ((event.body.toLowerCase() == "ja rha") || (event.body.toLowerCase() == "ja rhi")) {
     return api.sendMessage("Are Tu Ja Na Ree ", threadID);
   };

   if ((event.body.toLowerCase() == "nikal") || (event.body.toLowerCase() == "nikl")) {
     return api.sendMessage("ChaL ChaL Tu NiKaL", threadID);
   };

   if ((event.body.toLowerCase() == "jan") || (event.body.toLowerCase() == "janu")) {
     return api.sendMessage("Aww🥰 Yes My LoVe", threadID);
   };

if ((event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😀😀")) {
     return api.sendMessage("PyaL Se Muskra Rahe 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😃😃")) {
     return api.sendMessage("ChuhY JasA MuH Na DekHa 😆", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂")) {
     return api.sendMessage("Kuch Ziada Hashi Nii a Rhii 🙄", threadID);
   };
   
   if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁")) {
     return api.sendMessage("Mashoom Lag Rahe 🤪", threadID);
   };
   
   if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😆😆")) {
     return api.sendMessage("Ankhe Q BanD HOo Gyy TRri🙄", threadID);
   };
   
   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅")) {
     return api.sendMessage("Ki Hoya E🙄🙄", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
     return api.sendMessage("TeRry Munh Se Bhi Hash Lety HOo 😒", threadID);
   };
   
   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("Roya Ni KaRro Plejjj🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("SaLy Tharkii Ankhe MaRTyy HOo 🙁", threadID);
   };
   
   if ((event.body.toLowerCase() == "😗") || (event.body.toLowerCase() == "😗😗")) {
     return api.sendMessage("😚😚😚", threadID);
   };
   
   if ((event.body.toLowerCase() == "😙") || (event.body.toLowerCase() == "😙😙")) {
     return api.sendMessage("😗😗😗", threadID);
   };
   
   if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😚😚")) {
     return api.sendMessage("😗😙😚", threadID);
   };
   
   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘😘")) {
     return api.sendMessage("Hyee PaPpiya 💋", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰")) {
     return api.sendMessage("Main Shadqy 🥰🥰 ", threadID);
   };
   
   if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍")) {
     return api.sendMessage("ThaRkk Naa MaRr 🤪", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "🤩🤩")) {
     return api.sendMessage("Ankhon Prr StaR 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳")) {
     return api.sendMessage("KiSs ka BirthDay Hai BaBu 🥳", threadID);
   };
   
   
   if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("Ufff KhuDaya 🙁", threadID);
   };
   
   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("ASsi Fake SmiLe Na DoO Na 🥺💚", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥲🥲")) {
     return api.sendMessage("AsHy MTT ROo 😔", threadID);
   };
   
   if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊")) {
     return api.sendMessage("Hyee HSs Pary 😘", threadID);
   };
   
   if ((event.body.toLowerCase() == "☺️") || (event.body.toLowerCase() == "☺️☺️")) {
     return api.sendMessage("🥺🥺 ASsi SmiLe Achi Ni hOti ", threadID);
   };
   
   if ((event.body.toLowerCase() == "😌") || (event.body.toLowerCase() == "😌😌")) {
     return api.sendMessage("MaSsoom 😵", threadID);
   };
   
   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("Hye Re TeRra SaSsta Attitude 🤪", threadID);
   };
   
   if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴")) {
     return api.sendMessage("SoO Jaa 😴😴", threadID);
   };
   
   if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "😪😪")) {
     return api.sendMessage("TRri Nose KOo kYa HoWa 😒", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤤") || (event.body.toLowerCase() == "🤤🤤")) {
     return api.sendMessage("HatT Gandy 😣", threadID);
   };
   
   if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋")) {
     return api.sendMessage("Ufff 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛😛")) {
     return api.sendMessage("Uffff YaaL 😐", threadID);
   };
   
   if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝")) {
     return api.sendMessage("Itnii LaMbii Zuban TrRri 😹", threadID);
   };
   
   if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜")) {
     return api.sendMessage("MaSstiya Kr Ly BCchu 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤪") || (event.body.toLowerCase() == "🤪🤪")) {
     return api.sendMessage("AaJeeb CarToOn 😹", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
     return api.sendMessage("SaSsty NaSshy sy Yehi HaaL Hona Hai 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔")) {
     return api.sendMessage("Uff Ye UdaaSsi🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺")) {
     return api.sendMessage("BheeGi BiLLo 😹", threadID);
   };
   
   if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase() == "😬😬")) {
     return api.sendMessage("🙁🙁🙁", threadID);
   };
   
   if ((event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😑😑")) {
     return api.sendMessage("Munh DhOo KRr AoO 😹", threadID);
   };
   
   if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐")) {
     return api.sendMessage("Munh KhOoL k Sans Le Lyy 😹", threadID);
   };
   
   if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶")) {
     return api.sendMessage("ShabaSh ASsy ChuP Raha kRro 😐", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐")) {
     return api.sendMessage("ABb AwaaZ Na Ayy TRri 😹", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("KiSs ki SoOchu Main GuM HOo 😒", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫")) {
     return api.sendMessage("😹😹😹", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
     return api.sendMessage("😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "🥱")) {
     return api.sendMessage("GooOd WaLi Night 🌉", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗🤗")) {
     return api.sendMessage("Aww Babe 💚", threadID);
   };
   
   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😱😱")) {
     return api.sendMessage("ABby JiN Kya HoWa😒", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨")) {
     return api.sendMessage("BaRry HoshiyaR BaN Rahe 🤪", threadID);
   };
   
   if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🧐🧐")) {
     return api.sendMessage("ThoRa Oor ZoOM KRr 🧐🧐🧐", threadID);
   };
   
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessage("ASsy Na DekHoO I Am MaSsOom 🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("Uper Kon Hai 🙄", threadID);
   };
   
   if ((event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😤😤")) {
     return api.sendMessage("NaaK Main Kya DaaL RHe 😹", threadID);
   };
   
   if ((event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "😠😠")) {
     return api.sendMessage("Ufff 🥺GhuSsa", threadID);
   };
   
   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡")) {
     return api.sendMessage("Uff GhuSsa 🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬🤬")) {
     return api.sendMessage("Aww 😐", threadID);
   };
   
   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😞😞")) {
     return api.sendMessage("Aww JaaN SaDneSs🥺", threadID);
   };
   
      if ((event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😓😓")) {
     return api.sendMessage("☹️", threadID);
   };
   
      if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢")) {
     return api.sendMessage("😭😭😭", threadID);
   };
   
      if ((event.body.toLowerCase() == "GG") || (event.body.toLowerCase() == "G")) {
     return api.sendMessage("H I J K L M N O P Q R S T U V W X Y Z ", threadID);
   };
   
      if ((event.body.toLowerCase() == "🙁") || (event.body.toLowerCase() == "🙁🙁")) {
     return api.sendMessage("ShaRrTi 🙁", threadID);
   };
   
      if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😕😕")) {
     return api.sendMessage("🙁🙁🙁", threadID);
   };
   
      if ((event.body.toLowerCase() == "😰") || (event.body.toLowerCase() == "😰😰")) {
     return api.sendMessage("Aww 😨", threadID);
   };
   
   
      if ((event.body.toLowerCase() == "😨") || (event.body.toLowerCase() == "😨😨")) {
     return api.sendMessage("😰😰😰", threadID);
   };
   
      if ((event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😧😧")) {
     return api.sendMessage("😳", threadID);
   };
   
      if ((event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😦😦")) {
     return api.sendMessage("😧", threadID);
   };
   
      if ((event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😮😮")) {
     return api.sendMessage("Ek DaM se Munh KhuL Gya 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😯") || (event.body.toLowerCase() == "😯😯")) {
     return api.sendMessage("😲", threadID);
   };
   
      if ((event.body.toLowerCase() == "😲") || (event.body.toLowerCase() == "😲😲")) {
     return api.sendMessage("😯", threadID);
   };
   
      if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳😳")) {
     return api.sendMessage("ThOra Oor KhOoL Le Ankhe 😹", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯")) {
     return api.sendMessage("DhaMaka😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😖😖")) {
     return api.sendMessage("Uffff RaBa", threadID);
   };
   
      if ((event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "😣😣")) {
     return api.sendMessage("😣😣😣", threadID);
   };
   
      if ((event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😫")) {
     return api.sendMessage("MaSsomiyaT 😹", threadID);
   };
   
      if ((event.body.toLowerCase() == "😵") || (event.body.toLowerCase() == "😵😵")) {
     return api.sendMessage("TRri Eyes😟", threadID);
   };
   
      if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "sardi")) {
     return api.sendMessage("AjaOo Garm KRru 🙈😜", threadID);
   };
   
      if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵")) {
     return api.sendMessage("BaRre GaRm Ho 😂🥶", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤢") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Chee.!!! 😣", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "😷")) {
     return api.sendMessage("💉 IsSki ZRorT ApKoO🥺", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤒") || (event.body.toLowerCase() == "🤕")) {
     return api.sendMessage("😜💉💉💉", threadID);
   };
   
      if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎😎")) {
     return api.sendMessage("AhaM HeRoO 🌚", threadID);
   };
   
      if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇😇")) {
     return api.sendMessage("😇😇😇", threadID);
   };
   
      if ((event.body.toLowerCase() == "🥸") || (event.body.toLowerCase() == "🤓")) {
     return api.sendMessage("JiN😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤡") || (event.body.toLowerCase() == "🤡🤡")) {
     return api.sendMessage(" SweeT CarT0on 😹", threadID);
   };
   
      if ((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "👿")) {
     return api.sendMessage("👽👽👽", threadID);
   };
   
      if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😹😹")) {
     return api.sendMessage("Aww BiLLiiiiii 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😺") || (event.body.toLowerCase() == "😸")) {
     return api.sendMessage("😼😼😼", threadID);
   };
   
      if ((event.body.toLowerCase() == "😼") || (event.body.toLowerCase() == "😼😼")) {
     return api.sendMessage("😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "💋💋💋")) {
     return api.sendMessage("Umaahhh AjaoO PaSs", threadID);
   };
   
      if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "💚")) {
     return api.sendMessage("🖤🧡💜💙🤎🤍", threadID);
   };
   
      if ((event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "🤎")) {
     return api.sendMessage("❤️🖤🤍🤎💚💜", threadID);
   };
   
      if ((event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "💙")) {
     return api.sendMessage("💚🤎🤍🖤❤️🧡", threadID);
   };
   
         if ((event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🤍")) {
     return api.sendMessage("❤️🧡💛💚💙💜🤎", threadID);
   };
   
      if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻👻")) {
     return api.sendMessage("BhoOt😹", threadID);
   };
   
      if ((event.body.toLowerCase() == "🖕") || (event.body.toLowerCase() == "🖕🖕")) {
     return api.sendMessage("Bund Me LeLe ApNi Bhens Chor 😂😂😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "💉") || (event.body.toLowerCase() == "💊")) {
     return api.sendMessage("TumHy isKi ZaiDa Zarurat Hai 🤣", threadID);
   };
   
      if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
     return api.sendMessage("Uffff BanDrr 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "Chutia") || (event.body.toLowerCase() == "chutiya")) {
     return api.sendMessage("Tu Hai ChuTiya 🙂 Main T0o BoT Hun Naw🥺😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "oye") || (event.body.toLowerCase() == "oyee")) {
     return api.sendMessage("0yee 2😈", threadID);
   };
  
   if ((event.body.toLowerCase() == "Kkkkkk") || (event.body.toLowerCase() == "jjj")) {
     return api.sendMessage("KYa ", threadID);
   };

   if ((event.body.toLowerCase() == "Kkkkk") || (event.body.toLowerCase() == "Buraaa")) {
     return api.sendMessage(" H I J K L M N O P Q R S T U V W X Y Z 🙄", threadID);
   };

   if ((event.body.toLowerCase() == "huh") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("Kya Hmm 🙄ThaRki", threadID);
   };

   if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha g")) {
     return api.sendMessage("Han Ji BaBu 💝🤪", threadID);
   };

   if ((event.body.toLowerCase() == "Janu") || (event.body.toLowerCase() == "jan")) {
     return api.sendMessage("Bolo Naw MeRi JaN🥰💙", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "G") || (event.body.toLowerCase() == "gg")) {
     return api.sendMessage("H I J K L M N O P Q R S T U V W X Y Z", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `ㅤㅤ\n╭═════════════❤╮\n⏤͟͟͞͞◯K͠e͟e͟p͟ E͟Y͟E͟S͟ o͢n͢ m͢e͢😜\n       ⬳  😘😘 ᴵᵀˢ ᴹᴱ ˢᴴᴼᴺᴬ ᯤᯱᯱᯱᯱᯱᯱᯱ ᯤᯱᯱᯱ\n   ᶜᴿᴱᴬᵀᴱᴰ ᵇʸ  𓆩♥︎🅐ᴍɪʀ😍𓆪\n╰❤═════════════╯\n      ○${name}࿐\n      ➣${rand}\nㅤ`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }