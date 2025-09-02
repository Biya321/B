module.exports.config = {
    name: "leave",
    eventType: ["log:unsubscribe"],
    version: "1.0.0",
    credits: "Nabhia Haq",
    description: "Notify when someone leaves the group with a random gif/photo/video",
    dependencies: {
        "fs-extra": "",
        "path": ""
    }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const path = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path)) mkdirSync(path, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;

    const { createReadStream, existsSync, readdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");

    const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);

    var msg = `😢 ${name} ne group chhod diya!  
Humari party thodi kamzor ho gayi hai, par life chalta rahega! 🎉😉

⏰ ${time}
Agle milne tak, all the best!`;

    const gifFolder = join(__dirname, "cache", "leaveGif", "randomgif");
    let formPush = { body: msg };

    if (existsSync(gifFolder)) {
        const gifs = readdirSync(gifFolder);
        if (gifs.length > 0) {
            const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
            formPush.attachment = createReadStream(join(gifFolder, randomGif));
        }
    }

    return api.sendMessage(formPush, threadID);
}
