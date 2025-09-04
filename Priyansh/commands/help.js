module.exports.config = {
  name: "help",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "Nabhiaa Haq",
  description: "Beginner's Guide",
  commandCategory: "system",
  usages: "[command name]",
  cooldowns: 1,
  envConfig: {
    autoUnsend: false,
    delayUnsend: 300
  }
};

module.exports.languages = {
  "en": {
    "moduleInfo": "✨ Command: %1\n📖 Description: %2\n\n🔧 Usage: %3\n📂 Category: %4\n⏳ Cooldown: %5s\n🔑 Permission: %6\n\n👑 Code by: %7",
    "helpList": "[ There are %1 commands in this bot, use: \"%2help nameCommand\" to see details! ]",
    "user": "User",
    "adminGroup": "Admin group",
    "adminBot": "Admin bot"
  }
};

module.exports.run = function({ api, event, args, getText }) {
  const { commands } = global.client;
  const { threadID, messageID } = event;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

  // Agar user ne kisi specific command ka help manga
  if (args[0]) {
    const command = commands.get(args[0].toLowerCase());
    if (!command) return api.sendMessage(`❌ Command '${args[0]}' not found.`, threadID, messageID);
    return api.sendMessage(
      getText("moduleInfo", 
        command.config.name,
        command.config.description,
        `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`,
        command.config.commandCategory,
        command.config.cooldowns,
        ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")),
        command.config.credits
      ), threadID, messageID
    );
  }

  // Agar user sirf help likhe
  let msg = `🌐 𝐁𝐨𝐭 𝐇𝐞𝐥𝐩 𝐌𝐞𝐧𝐮 🌐\n━━━━━━━━━━━━━━━\n👑 Owner: Nabhiaa Haq\n🔗 Profile: https://www.facebook.com/61575126731193\n📜 Total Commands: ${commands.size}\n💡 Tip: Use ${prefix}help <command>\n━━━━━━━━━━━━━━━\n\n`;

  let i = 0;
  for (const [name] of commands) {
    msg += `✰『 ${++i} 』 ➬ ${prefix}${name}\n`;
  }

  return api.sendMessage(msg, threadID, messageID);
};
