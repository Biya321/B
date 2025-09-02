module.exports.config = {
    name: "guard",
    eventType: ["log:thread-admins"],
    version: "1.0.0",
    credits: "Nabhia Haq",
    description: "Prevent admin changes",
};

module.exports.run = async function ({ event, api, Threads, Users }) {
    const { logMessageType, logMessageData } = event;
    let data = (await Threads.getData(event.threadID)).data;
    if (data.guard == false) return;

    if (data.guard == true) {
        switch (logMessageType) {
            case "log:thread-admins": {
                if (logMessageData.ADMIN_EVENT == "add_admin") {
                    if(event.author == api.getCurrentUserID()) return;
                    if(logMessageData.TARGET_ID == api.getCurrentUserID()) return;
                    else {
                        api.changeAdminStatus(event.threadID, event.author, false, editAdminsCallback);
                        api.changeAdminStatus(event.threadID, logMessageData.TARGET_ID, false);
                        function editAdminsCallback(err) {
                            if (err) 
                                return api.sendMessage("Admin banne ki koshish ki? Hansi aa gayi! 😂", event.threadID, event.messageID);
                            return api.sendMessage(`🚫 Bhai, admin banna mana hai! Yeh mera group hai!`, event.threadID, event.messageID);
                        }
                    }
                } else if (logMessageData.ADMIN_EVENT == "remove_admin") {
                    if(event.author == api.getCurrentUserID()) return;
                    if(logMessageData.TARGET_ID == api.getCurrentUserID()) return;
                    else {
                        api.changeAdminStatus(event.threadID, event.author, false, editAdminsCallback);
                        api.changeAdminStatus(event.threadID, logMessageData.TARGET_ID, true);
                        function editAdminsCallback(err) {
                            if (err) 
                                return api.sendMessage("Admin hata ke badmaashi? Socho dobara! 😜", event.threadID, event.messageID);
                            return api.sendMessage(`😜 Oye! Admin hata ke maza lena? Socha tu hi king ban jayega? Ab aise na kar, warna agli baar mauka nahi milega! 😤`, event.threadID, event.messageID);
                        }
                    }
                }
                break;
            }
        }
    }
}
