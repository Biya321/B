const schedule = require('node-schedule');
const moment = require('moment-timezone');
const chalk = require('chalk');

module.exports.config = {
    name: 'autosent',
    version: '10.0.0',
    hasPermssion: 0,
    credits: 'Nabhia Haq',
    description: 'Set Karne Ke Bad Automatically Msg Send Karega',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};

const messages = [
    { time: '12:00 AM', message: '⏰ 12:00 AM: Raat ke 12 baj gaye hain... ab so jao, kal Fajr miss na ho 💫 Allah Hafiz 🌙' },
    { time: '1:00 AM', message: '⏰ 1:00 AM: Itni dair tak jaagna sehat ke liye acha nahi... Dua karo aur so jao 🤲😴' },
    { time: '2:00 AM', message: '⏰ 2:00 AM: Neend nahi aa rahi? Allah se baat karo... dil ko sukoon milega 🤍🕋' },
    { time: '3:00 AM', message: '⏰ 3:00 AM: Ye waqt tahajjud ka hota hai... uth kar Allah se apni baat keh do 🌙🕊️' },
    { time: '4:00 AM', message: '⏰ 4:00 AM: Subah qareeb hai... Fajr ki tayyari karo, rooh ko zinda karo 🌄🕌' },
    { time: '5:00 AM', message: '⏰ 5:00 AM: Fajr ka waqt hai... uth jao, Rab bula raha hai 💖🕋' },
    { time: '6:00 AM', message: '⏰ 6:00 AM: Assalamualaikum! Naye din ki shuruaat Allah ka shukar ada kar ke karo 🤲🌞' },
    { time: '7:00 AM', message: '⏰ 7:00 AM: Din ka aghaaz Bismillah se karo, har kaam mein barkat hogi 💫📿' },
    { time: '8:00 AM', message: '⏰ 8:00 AM: Kaam pe nikalne se pehle Surah Al-Fatiha padh lena 💼🕋' },
    { time: '9:00 AM', message: '⏰ 9:00 AM: Nashta kar lo... sehat bhi amaanat hai, Allah ki ni’mat hai 🍽️💛' },
    { time: '10:00 AM', message: '⏰ 10:00 AM: Kaam mein mehnat aur niyyat dono zaroori hain — Allah dekh raha hai 💪📖' },
    { time: '11:00 AM', message: '⏰ 11:00 AM: Thodi dair Allah ka zikr kar lo... dil ko raahat milegi 🕊️📿' },
    { time: '12:00 PM', message: '⏰ 12:00 PM: Dhoop tez hai, lekin Allah ki rehmat har garmi se zyada thandi hai ☀️🌿' },
    { time: '1:00 PM', message: '⏰ 1:00 PM: Zohar ka waqt hone wala hai, tayyari karo namaz ki 🕌🤲' },
    { time: '2:00 PM', message: '⏰ 2:00 PM: Har mushkil ke baad aasani hai — Quran ka waada hai 💖📖' },
    { time: '3:00 PM', message: '⏰ 3:00 PM: Thoda sukoon chahiye? Wazoo karo, aur Quran ki tilawat suno 🌸🎧' },
    { time: '4:00 PM', message: '⏰ 4:00 PM: Asr se pehle thodi dair Allah ka zikr zaroor kar lena 🤲📿' },
    { time: '5:00 PM', message: '⏰ 5:00 PM: Har haal mein shukar karna seekho, Allah aur zyada dega 💫🤍' },
    { time: '6:00 PM', message: '⏰ 6:00 PM: Maghrib ka waqt qareeb hai... roshniyon mein rooh bhi chamakti hai 🕌✨' },
    { time: '7:00 PM', message: '⏰ 7:00 PM: Dua karo: "Ya Allah har dukh door kar aur khushi nazil farma" 🤲💛' },
    { time: '8:00 PM', message: '⏰ 8:00 PM: Dinner ka waqt hai... khane se pehle Bismillah, baad mein Alhamdulillah 🍛😊' },
    { time: '9:00 PM', message: '⏰ 9:00 PM: Aaj ka din kaisa bhi guzra ho, shukar zaroor karo — rehmat milti hai 💫🕊️' },
    { time: '10:00 PM', message: '⏰ 10:00 PM: Sone se pehle Surah Mulk yaad se parhna... qabar mein roshni milegi 🌙📖' },
    { time: '11:00 PM', message: '⏰ 11:00 PM: Khana khaya? Dua ke sath so jao: "Allahumma bismika amutu wa ahya" 🌌🤲' }
];

module.exports.onLoad = ({ api }) => {
    console.log(chalk.bold.hex("#00c300")("============ SUCCESFULLY LOADED THE AUTOSENT COMMAND ============"));

    messages.forEach(({ time, message }) => {
        const [hour, minute, period] = time.split(/[: ]/);
        let hour24 = parseInt(hour, 10);
        if (period === 'PM' && hour !== '12') {
            hour24 += 12;
        } else if (period === 'AM' && hour === '12') {
            hour24 = 0;
        }

        const scheduledTime = moment.tz({ hour: hour24, minute: parseInt(minute, 10) }, 'Asia/karachi').toDate();

        schedule.scheduleJob(scheduledTime, () => {
            global.data.allThreadID.forEach(threadID => {
                api.sendMessage(message, threadID, (error) => {
                    if (error) {
                        console.error(`Failed to send message to ${threadID}:`, error);
                    }
                });
            });
        });
    });
};

module.exports.run = () => {
    // This function can be left empty as the main logic is handled in onLoad
};
