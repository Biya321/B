module.exports.config = {
  name: "autoreact",
  version: "1.1.4",
  hasPermission: 0,
  credits: "Nabhia Haq",
  description: "Auto Emoji React (Islamic | Pakistani | Funny | Sad | Angry)",
  commandCategory: "No Prefix",
  usages: '[]',
  cooldowns: 0,
};

const fs = require("fs");

module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  let react = event.body?.toLowerCase();
  if (!react) return;

  // ☪️ Islamic
  if (
    react.includes("allah") || react.includes("islam") || react.includes("mashallah") ||
    react.includes("subhanallah") || react.includes("alhamdulillah") || react.includes("inshaallah") ||
    react.includes("namaz") || react.includes("dua") || react.includes("quran") || react.includes("ramzan") ||
    react.includes("ramadan") || react.includes("tauba") || react.includes("astaghfirullah")
  ) {
    api.setMessageReaction("☪️", messageID, () => {}, true);
    return;
  }

  // 🇵🇰 Pakistan
  if (
    react.includes("pakistan") || react.includes("zindabad") || react.includes("pti") ||
    react.includes("imran khan") || react.includes("pak army") || react.includes("pak") ||
    react.includes("ary") || react.includes("pakistani") || react.includes("karachi") ||
    react.includes("lahore") || react.includes("multan") || react.includes("islamabad")
  ) {
    api.setMessageReaction("🇵🇰", messageID, () => {}, true);
    return;
  }

  // ❤️ Love
  if (
    react.includes("love") || react.includes("lab") || react.includes("labyu") || react.includes("sweet") ||
    react.includes("mwah") || react.includes("baby") || react.includes("babe") || react.includes("jaan") ||
    react.includes("crush") || react.includes("angel") || react.includes("sweetheart") ||
    react.includes("mohabbat") || react.includes("pyar") || react.includes("ishq") || react.includes("dil")
  ) {
    api.setMessageReaction("❤️", messageID, () => {}, true);
    return;
  }

  // 😢 Sad
  if (
    react.includes("sad") || react.includes("cry") || react.includes("hurt") || react.includes("depress") ||
    react.includes("lonely") || react.includes("😭") || react.includes("😢") || react.includes("broken") ||
    react.includes("miserable") || react.includes("tired") || react.includes("😞") || react.includes("😔") ||
    react.includes("udaas") || react.includes("rona") || react.includes("dukh") || react.includes("takleef") ||
    react.includes("gham")
  ) {
    api.setMessageReaction("😢", messageID, () => {}, true);
    return;
  }

  // 😡 Gussa / Angry
  if (
    react.includes("gussa") || react.includes("naraz") || react.includes("naraaz") || react.includes("bara barasna") ||
    react.includes("laanat") || react.includes("zehr") || react.includes("kasam se") || react.includes("gusa") ||
    react.includes("angry") || react.includes("hate") || react.includes("mad") || react.includes("stupid") ||
    react.includes("idiot") || react.includes("nonsense") || react.includes("trash") || react.includes("pissed") ||
    react.includes("annoying") || react.includes("furious") || react.includes("rage") || react.includes("toxic") ||
    react.includes("bakchod") || react.includes("chill maar") || react.includes("ullu ka patha") ||
    react.includes("loser") || react.includes("irritating")
  ) {
    api.setMessageReaction("😡", messageID, () => {}, true);
    return;
  }

  // 😂 Funny + Roman Urdu
  if (
    react.includes("funny") || react.includes("joke") || react.includes("lol") || react.includes("haha") ||
    react.includes("pagal") || react.includes("crazy") || react.includes("lmao") || react.includes("😂") ||
    react.includes("uff") || react.includes("oye") || react.includes("oye hoye") || react.includes("hayeee") ||
    react.includes("mast") || react.includes("masla") || react.includes("scene") || react.includes("sasta") ||
    react.includes("expensive") || react.includes("bakwas") || react.includes("gadha") ||
    react.includes("chawal") || react.includes("ullu") || react.includes("dramay") || react.includes("drama") ||
    react.includes("dramaybazi") || react.includes("meme")
  ) {
    api.setMessageReaction("😂", messageID, () => {}, true);
    return;
  }

  // 🌙 Greetings
  if (
    react.includes("good morning") || react.includes("morning") || react.includes("evening") ||
    react.includes("good night") || react.includes("night") || react.includes("salam") ||
    react.includes("assalamualaikum") || react.includes("afternoon") || react.includes("jumma") ||
    react.includes("eid mubarak") || react.includes("ramadan mubarak") || react.includes("shab bakhair") ||
    react.includes("subha bakhair") || react.includes("kese ho") || react.includes("kaisi ho")
  ) {
    api.setMessageReaction("🌙", messageID, () => {}, true);
    return;
  }

  // 🖤 Soul / Deep
  if (react.includes("soul") || react.includes("deep") || react.includes("spiritual") || react.includes("vibe") || react.includes("feel")) {
    api.setMessageReaction("🖤", messageID, () => {}, true);
    return;
  }

  // 😮 Wow / Amazing
  if (
    react.includes("wow") || react.includes("amazing") || react.includes("awesome") ||
    react.includes("robot") || react.includes("great") || react.includes("beautiful") ||
    react.includes("nice") || react.includes("wah") || react.includes("kya baat")
  ) {
    api.setMessageReaction("😮", messageID, () => {}, true);
    return;
  }
};

module.exports.run = function({ api, event }) {
  // No command required
};
