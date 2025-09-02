module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "Nabhia Haq",
    description: "Notification when people or bots join groups, with random gif/photo/video",
    dependencies: {
        "fs-extra": "",
        "path": "",
        "pidusage": ""
    }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const path = join(__dirname, "cache", "joinvideo");
    if (!existsSync(path)) mkdirSync(path, { recursive: true });

    const path2 = join(__dirname, "cache", "joinvideo", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
};

module.exports.run = async function({ api, event }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;

    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        // Bot joined the group
        api.changeNickname(`[ ${global.config.PREFIX} ] • ${global.config.BOTNAME || "Bot"}`, threadID, api.getCurrentUserID());
        const fs = require("fs");
        return api.sendMessage("", threadID, () => api.sendMessage({
            body: 
`Hello everyone! I am your new bot here to help you.  
My prefix is: ${global.config.PREFIX}

Type ${global.config.PREFIX}help to see all commands.

Owner: Nabhia Haq  
Contact: @NabhiaHaqOfficial on Telegram

Welcome and enjoy your time! 🫴✨️❤️`,
            attachment: fs.createReadStream(__dirname + "/cache/botjoin.mp4")
        }, threadID));
    }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);

            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "cache", "joinvideo");
            const pathVideo = join(path, `${threadID}.video`);

            let mentions = [], nameArray = [], memCount = [], i = 0;

            for (let id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memCount.push(participantIDs.length - i++);
            }
            memCount.sort((a, b) => a - b);

            let msg = threadData.customJoin || 
`Hello {name}! Welcome to the group "{threadName}".
You are member number {soThanhVien}.

Please enjoy your time and make new {type}!

- Nabhia Haq 🫴✨️❤️`;

            msg = msg
                .replace(/\{name}/g, nameArray.join(', '))
                .replace(/\{type}/g, memCount.length > 1 ? "friends" : "friend")
                .replace(/\{soThanhVien}/g, memCount.join(', '))
                .replace(/\{threadName}/g, threadName);

            if (!existsSync(path)) mkdirSync(path, { recursive: true });

            const randomGifs = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

            let formPush;
            if (existsSync(pathVideo)) {
                formPush = { body: msg, attachment: createReadStream(pathVideo), mentions };
            } else if (randomGifs.length > 0) {
                const randomFile = randomGifs[Math.floor(Math.random() * randomGifs.length)];
                const randomPath = join(__dirname, "cache", "joinGif", "randomgif", randomFile);
                formPush = { body: msg, attachment: createReadStream(randomPath), mentions };
            } else {
                formPush = { body: msg, mentions };
            }

            return api.sendMessage(formPush, threadID);
        } catch (error) {
            console.log(error);
        }
    }
};
