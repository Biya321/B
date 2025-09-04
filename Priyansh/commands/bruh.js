const fs = require("fs");
module.exports.config = {
	name: "bruh",
    version: "2.0.0",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 (Funny 100+ Edition by ChatGPT)", 
	description: "Funny bruh reaction",
	commandCategory: "Không cần dấu lệnh",
	usages: "bruh",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  	let bot = global.config.OTHERBOT;

  	// 100+ Funny replies
  	const funnyReplies = [
    	"🤣 Bruh! Tmhari entry ne to wifi ka signal hila diya!",
    	"😂 Bruh moment detected! Police ko bulaun kya?",
    	"🤯 Bruh... ye to physics ke laws tod diya!",
    	"😹 Bruh, tmne to chat ko comedy show bana diya!",
    	"🙈 Bruh! Ye dekh k CPU bhi hang ho gaya!",
    	"🤣 Bruh x 1000! Matlab limit cross!",
    	"😂 Bruh! Lagta hai tmhe coffee ki zarurat hai!",
    	"😜 Bruh! Ye reply AI ne bhi facepalm kiya!",
    	"🤣 Bruh! Chat GPT bhi confuse ho gaya!",
    	"😅 Bruh! Ye joke sun k google bhi chup ho gaya!",
    	"😂 Bruh! Matlab banda serious h ya comedy show?",
    	"🤪 Bruh! Tumhari logic Windows XP jaisi hai!",
    	"🤣 Bruh! NASA ne tumhara message decode karna chhod diya!",
    	"😂 Bruh! Lagta hai tm emoji se zyada bolte ho!",
    	"😹 Bruh! Ye to whatsapp sticker level reply tha!",
    	"🤣 Bruh! School teacher ne bhi is pe markat banadi hoti!",
    	"😆 Bruh! Lagta hai tumhe biryani ki zarurat hai!",
    	"😂 Bruh! Matlab kaam to zero par confidence 100!",
    	"🤣 Bruh! Tumhari typing ne keyboard rula diya!",
    	"🤯 Bruh! Ye dekh k wifi router ne resign kar diya!",
    	"😂 Bruh! Matlab ye banda serious h ya prankster?",
    	"🤣 Bruh! Tumhe comedy nights host karna chahiye!",
    	"😹 Bruh! Tumhara reply chat ka earthquake tha!",
    	"😂 Bruh! Matlab sense 0, fun 100!",
    	"🤣 Bruh! Aaj ka best meme candidate tum ho!",
    	"🤪 Bruh! Ye reply dekh k AI bhi soch me padh gayi!",
    	"🤣 Bruh! Matlab samajh se bahar ka logic!",
    	"😂 Bruh! Tumhari baat sun k Siri bhi so gayi!",
    	"🤣 Bruh! Matlab banda duniya ka Einstein ban raha h!",
    	"😹 Bruh! Tumhara reply TikTok trend banne layak hai!",
    	"🤣 Bruh! Matlab English grammar ne bhi chhutti le li!",
    	"😂 Bruh! Chat me aag lagadi tumne!",
    	"🤣 Bruh! Matlab dimag full battery, output zero!",
    	"🤯 Bruh! Ye joke chemistry ke formula jaisa hai!",
    	"😅 Bruh! Matlab banda full filmy mode on h!",
    	"🤣 Bruh! Tumhara reply = free fire headshot!",
    	"😂 Bruh! Matlab banda hacker nikal gaya!",
    	"🤣 Bruh! Tumhari typing ne mobile ka RAM khatam kar diya!",
    	"🤪 Bruh! Matlab logical error detected!",
    	"😂 Bruh! Ye to Elon Musk ke rocket se bhi tez udda!",
    	"🤣 Bruh! Matlab ispe to Wikipedia bhi blank h!",
    	"😂 Bruh! Matlab sense chhodo, nonsense full on!",
    	"🤣 Bruh! Matlab banda serious h ya tharki?",
    	"😹 Bruh! Matlab laptop ne bhi restart lena chaha!",
    	"🤣 Bruh! Matlab reply kar k duniya badal di!",
    	"😂 Bruh! Matlab banda khud hi apni duniya me!",
    	"🤣 Bruh! Matlab ekdum gajab ka scene h!",
    	"😂 Bruh! Matlab chat bhi shock me aa gayi!",
    	"🤣 Bruh! Matlab sense ka tala lag gaya!",
    	"😆 Bruh! Matlab banda WhatsApp forward jaisa h!",
    	"🤣 Bruh! Matlab reply se zyada funny banda h!",
    	"😂 Bruh! Matlab tum comedy king ho!",
    	"🤣 Bruh! Matlab hansi ruk hi nahi rahi!",
    	"😹 Bruh! Matlab banda joke factory h!",
    	"🤣 Bruh! Matlab system crash kar diya tumne!",
    	"😂 Bruh! Matlab ekdum comedy night ka scene!",
    	"🤣 Bruh! Matlab ab kya hi bolun!",
    	"🤪 Bruh! Matlab logic fail ho gaya!",
    	"🤣 Bruh! Matlab banda alien lag raha h!",
    	"😂 Bruh! Matlab dost ye to hadd h!",
    	"🤣 Bruh! Matlab reply gold medal deserve karta h!",
    	"😹 Bruh! Matlab banda full pagal h!",
    	"🤣 Bruh! Matlab hansi band hi nahi ho rahi!",
    	"😂 Bruh! Matlab bandi ya banda khud ka cartoon h!",
    	"🤣 Bruh! Matlab wifi ka signal off ho gaya!",
    	"😅 Bruh! Matlab reply ne mera din bana diya!",
    	"🤣 Bruh! Matlab aisa reply duniya me unique h!",
    	"😂 Bruh! Matlab ye banda ek number ka mast h!",
    	"🤣 Bruh! Matlab chat ki duniya hila di tumne!",
    	"😹 Bruh! Matlab ye banda Alok se bhi tez h!",
    	"🤣 Bruh! Matlab brain.exe stop working!",
    	"😂 Bruh! Matlab banda apna hi hero h!",
    	"🤣 Bruh! Matlab banda ekdum vibe check pass h!",
    	"😜 Bruh! Matlab reply world record ban gaya!",
    	"🤣 Bruh! Matlab banda ka mast sense of humor h!",
    	"😂 Bruh! Matlab tumhari line = viral content!",
    	"🤣 Bruh! Matlab banda comedy ka treasure h!",
    	"😹 Bruh! Matlab reply ekdum toxic funny h!",
    	"🤣 Bruh! Matlab system overload ho gaya!",
    	"😂 Bruh! Matlab banda khud hi lag raha h meme!",
    	"🤣 Bruh! Matlab tumhari baat AI ne note karli!",
    	"🤯 Bruh! Matlab reply to genius level ka tha!",
    	"🤣 Bruh! Matlab ekdum funny vibes!",
    	"😂 Bruh! Matlab banda free entertainment h!",
    	"🤣 Bruh! Matlab tumhari entry dhamaka h!",
    	"😹 Bruh! Matlab banda chat ka Shaktiman h!",
    	"🤣 Bruh! Matlab reply pura mast comedy h!",
    	"😂 Bruh! Matlab banda WhatsApp group ka star h!",
    	"🤣 Bruh! Matlab banda hi meme generator h!",
    	"😅 Bruh! Matlab reply ne sabko shock kar diya!",
    	"🤣 Bruh! Matlab banda full troll h!",
    	"😂 Bruh! Matlab tumhari line ne sabko hila diya!",
    	"🤣 Bruh! Matlab banda one man comedy show h!",
    	"🤪 Bruh! Matlab tumhari line ekdum OP h!",
    	"🤣 Bruh! Matlab chat ne standing ovation diya h!"
  	];

	if ((event.body.indexOf("bruh") == 0 || event.body.indexOf("Bruh") == 0) && !bot.includes(event.senderID)) {
		// Pick random funny reply
		const randomReply = funnyReplies[Math.floor(Math.random() * funnyReplies.length)];

		var msg = {
			body: randomReply,
			attachment: fs.createReadStream(__dirname + `/noprefix/xxx.mp3`)
		}
		api.sendMessage(msg, threadID, messageID);
	}
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
