module.exports.config = {
  name: "bio",
  version: "1.4.0",
  hasPermssion: 0, 
  credits: "Nabhiaa Haq", // ✅ Ab yahan tumhara naam
  description: "Change bot's Facebook bio",
  commandCategory: "system",
  usages: "bio [text]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const ownerUID = "61575126731193"; // ✅ Sirf tumhara UID allowed hai

  if (event.senderID !== ownerUID) {
    return api.sendMessage(
      "❌ Sorry! Only the bot owner can use this command.",
      event.threadID,
      event.messageID
    );
  }

  if (args.length === 0) {
    return api.sendMessage(
      "📌 Usage: bio <new bio text>\n👉 Example: bio I am your lovely bot 💖",
      event.threadID,
      event.messageID
    );
  }

  const newBio = args.join(" ");

  api.changeBio(newBio, (err) => {
    if (err) {
      return api.send
