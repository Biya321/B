const axios = require("axios");

module.exports.config = {
    name: "autochat",
    eventType: ["message"],
    version: "1.0.0",
    credits: "Nabhia Haq",
    description: "Bot insaan ki tarah har group me baat kare (AI)"
};

module.exports.run = async function ({ api, event }) {
    try {
        const msg = event.body;
        if (!msg) return;

        // Bot aur owner ka naam
        const botName = "NabhiaBot";
        const ownerName = "Nabhia Haq";

        // API Call (Affiliate+ free AI chatbot)
        const { data } = await axios.get("https://api.affiliateplus.xyz/api/chatbot", {
            params: {
                message: msg,
                botname: botName,
                ownername: ownerName,
                user: event.senderID
            }
        });

        // Sirf groups me reply kare (inbox me na kare)
        if (event.isGroup) {
            api.sendMessage(data.message, event.threadID, event.messageID);
        }

    } catch (err) {
        console.error(err);
    }
};
