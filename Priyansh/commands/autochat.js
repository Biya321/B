module.exports.config = {
  name: "chatbot",
  version: "2.2.0",
  hasPermssion: 0,
  credits: "Nabhia Haq",
  description: "Auto reply like simple girl 😊 with conversational lines",
  commandCategory: "system",
  usages: "",
  cooldowns: 0
};

module.exports.handleEvent = function({ api, event }) {
  const msg = event.body ? event.body.toLowerCase() : "";

  // greetings
  if (msg.includes("hello") || msg.includes("hi")) {
    return api.sendMessage("Hello 🙂 kesa ho?", event.threadID, event.messageID);
  }

  if (msg.includes("salam") || msg.includes("assalam o alaikum")) {
    return api.sendMessage("Wa Alaikum Salam 🌸", event.threadID, event.messageID);
  }

  // common questions
  if (msg.includes("kesa ho") || msg.includes("kaisa ho")) {
    return api.sendMessage("Main theek hoon 😊 aap sunao?", event.threadID, event.messageID);
  }

  if (msg.includes("bot on")) {
    return api.sendMessage("Haan ji, main yahan hoon ✨", event.threadID, event.messageID);
  }

  // conversational lines
  if (msg.includes("tum kaha thi") || msg.includes("kaha thi")) {
    return api.sendMessage("Bas yahi hoon 😇 tum sunao, kaha thi itni der?", event.threadID, event.messageID);
  }

  if (msg.includes("tum waha q gaye") || msg.includes("waha q gaye")) {
    return api.sendMessage("Arrey 😅 bas zarurat thi, waha chala gaya. Tumhare sath hota to maza aata!", event.threadID, event.messageID);
  }

  if (msg.includes("tum waha q gayi") || msg.includes("waha q gayi")) {
    return api.sendMessage("Bas 😇 kaam tha waha, aur tumhare sath hoti to aur fun hota 😄", event.threadID, event.messageID);
  }

  if (msg.includes("tumhara din kaisa tha") || msg.includes("din kaisa tha")) {
    return api.sendMessage("Din mast tha 😎 thodi masti, thoda kaam. Tumhara?", event.threadID, event.messageID);
  }

  if (msg.includes("tum busy thi") || msg.includes("busy thi")) {
    return api.sendMessage("Haan 😅 thodi busy thi, ab free hoon, baat karte hain!", event.threadID, event.messageID);
  }

  if (msg.includes("tumhe yaad hai") || msg.includes("yaad hai")) {
    return api.sendMessage("Bilkul yaad hai 😄 tumhare saath hamesha yaadgar pal hote hain!", event.threadID, event.messageID);
  }

  if (msg.includes("tumhara mood kaisa hai") || msg.includes("mood kaisa hai")) {
    return api.sendMessage("Mera mood 😇 mast hai, tumhara?", event.threadID, event.messageID);
  }

  if (msg.includes("kuch batao") || msg.includes("news batao")) {
    return api.sendMessage("Bas 😄 mast chal raha hai, tumhare liye ek surprise ho sakta hai 😉", event.threadID, event.messageID);
  }

  if (msg.includes("chal hum milte hain") || msg.includes("milte hain")) {
    return api.sendMessage("Waah 😍 milte hain, kab aur kaha?", event.threadID, event.messageID);
  }

  if (msg.includes("tumhe kya pasand hai") || msg.includes("kya pasand hai")) {
    return api.sendMessage("Mujhe 😄 khana, masti aur memes pasand hain 😎 tumhe?", event.threadID, event.messageID);
  }

  // other friendly / daily life lines
  if (msg.includes("thak gya") || msg.includes("thak gayi")) {
    return api.sendMessage("Arey 😟 zyada kaam mat karo, rest le lo 🙂", event.threadID, event.messageID);
  }

  if (msg.includes("bor ho raha hoon") || msg.includes("bor ho rahi hoon")) {
    return api.sendMessage("Chalo main baat karti hoon 🙂 ab bore nahi hoge", event.threadID, event.messageID);
  }

  if (msg.includes("so raha hoon") || msg.includes("so rahi hoon")) {
    return api.sendMessage("Thik hai 🙂 Good Night aur ache se so jana 🌙", event.threadID, event.messageID);
  }

  if (msg.includes("uth gya hoon") || msg.includes("uth gayi hoon")) {
    return api.sendMessage("Wah 👏 good morning phir se 🌞", event.threadID, event.messageID);
  }

  if (msg.includes("bhook lagi hai")) {
    return api.sendMessage("Toh kuch khana bana lo ya order kar lo 🍕🙂", event.threadID, event.messageID);
  }

  if (msg.includes("paisa bhejo") || msg.includes("balance bhejo")) {
    return api.sendMessage("😂😂 paisay ka topic mat chhedo please!", event.threadID, event.messageID);
  }

};
