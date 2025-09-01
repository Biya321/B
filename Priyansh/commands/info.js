module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Nabhia Haq",
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.imgur.com/Kj2CmiZ.jpegv"];
var callback = () => api.sendMessage({body:`
══════════════════════
        🤖 BOT INFORMATION
══════════════════════

📛 Bot Name   : ${global.config.BOTNAME}  
👑 Owner      : Nabhia Haq  
⚙️ Mode       : Professional Edition  

🌐 Official Links:  
   • Facebook  : fb.com/Nabhia_Haq.fake  
   • Instagram : instagram.com/Nabhia_Haq_fake  
   • Twitter   : twitter.com/Nabhia_Haq_network  
   • Telegram  : t.me/Nabhia_Haq_fake  

📅 Date       : ${juswa}  
⏰ Uptime     : ${hours}:${minutes}:${seconds}  

══════════════════════
        STATUS : ✅ ACTIVE
══════════════════════


`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
   