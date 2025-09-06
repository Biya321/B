const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Nabhia Haq",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main gariboo se baat nahi karta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayga" , "Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karunga" , "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya?😜" , "Teri Maa Ki Bindiya🤭" , "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , " Priyansh Ko Bol Dunga Me Mujhe Paresan Kiya To" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bejjati Karne Ka Saukh hai?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Ib Aja Yahan Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy Hu Naa" , "Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jara Tu 😈" , "Aagye Salle Kabab Me Haddi 😏" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , "FarMao 😒" , "BulaTi Hai MaGar Jaane Ka Nhi 😜" , "Main To Andha Hun 😎" , "Phle NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "WaYa KaRana Mere NaL 🙊" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Karen Rahul JaNu Ke SaTh Busy Hun 🤭🐒" , "Main flirty logo Sy Bt Nhi karti 😉😝😋🤪" , "Itna Pass mat aa Pyaar h0 JayGa" , "Bolo Babu Tum Mojy Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nahi hun main jo kaam hai bol do sharmao nahi" , "han ji bolo kya seva karne aapki 😶🤍" , "Tu Bandh nhi Karega kya?" , "kya Sunna Hai apko mere se flirty kahike🤐🤣 " , "Haa ji boliye kya kam he hamse 🙈" , "Aree band kar band Kar" , "Mein hath jod ke Modi Ji Se Gujarish Karta hu mojy na bolaye" , "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h" , " mera owner Ake tera bf/gf Ko Chura le Jayega" , "Bot bot hi karta rahna tu bas" , "Tujhe Apna Bejjati Karne Ka Saukh hai?🥹" , "Abhi Bola Toh Bola Dubara Mat Bolna🙄" , "Teri to Watt lagani padegi " , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "IB Aja Yahan Nhi B0ol Sakti 🙈😋" , "Mujhe Mat BuLao Na Main buSy h0 Now" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "bolo 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎kya likha tumne mene nahi dikha🤣" ,  "Pahale NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahi hoon kya hua sweetheart🥂🙈💞 ," , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor Dunga🤣✊" , "yes my love 💘" , "kya hua baby ko 😘😘" , "mujhe sharam ati hai aise aap bolte hai tho 🤭😝" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu 😘" , "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho 😂" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️" , "Dur Dur karib na a  tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂" , "ary ary bolo meri jaan kia haal hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 🤣✅" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪 " , "kyun Bulaya hamen..😾🔪 "];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "chutiye bot") || (event.body.toLowerCase() == "chumtiya bot") || (event.body.toLowerCase() == "chumtiye bot")) {
  return api.sendMessage("Tujhe toh UNESCO ne certified chomu declare kiya hai 😾🤣", threadID);
};

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
  };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️M hu hi itni Accha. sab log Tarref karte hai meri.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rha Tha🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️Kya huva, Sad kyu ho, Mujhe batao", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Karke Sidha Sidha bolo. Hey Marry Me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️Kya huva, Ro kyu rahe ho, Me huna to phir kyu rona. Ruko me abhi chocolate 🍫 deti hu likho ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Kya huva, Tabiyat kharab hai kya, Mujhe batao me abhi medicine 💊💉 le aati hu😇", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("️meri baccha toh Nahi Haa.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andhi Hu Dekh nhi sakti", threadID);
   };

   if ((event.body.toLowerCase() == "jai shree ram") || (event.body.toLowerCase() == "ram") || (event.body.toLowerCase() == "ram ram")) {
    return api.sendMessage("️𝗝𝗮𝗶 𝗦𝗵𝗿𝗲𝗲 𝗥𝗮𝗺 😇", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
     return api.sendMessage("️Bhai teri to naak hi etni lambi hai uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤨")) {
     return api.sendMessage("️Kya soch rahe ho etna 🤨", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
     return api.sendMessage("️Oye nashedi 😂😂😂", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️Kya huva bhoot dekh liya kya 👻👻", threadID);
   };
  
  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️️𝐓𝐢𝐫𝐜𝐡𝐢 𝐧𝐚𝐳𝐚𝐫𝐢𝐲𝐚 𝐦𝐨𝐫𝐢 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karungi na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Are apne muh pe kyu maar rahe ho, Mujhe batao kya huva?😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("Enni hasi kyu aa rahi hai🤣, Es hasi ke piche ka raaz kya hai batao", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
   };

   if ((event.body.toLowerCase() == "😵‍💫")) {
    return api.sendMessage("Lagta hai chakkar aa gaye 😵‍💫", threadID);
};

if ((event.body.toLowerCase() == "🤤")) {
    return api.sendMessage("Kya dekh ke muh se paani aa gaya? 🤤", threadID);
};

if ((event.body.toLowerCase() == "😚")) {
    return api.sendMessage("Awww! Flying kiss de diya 😚", threadID);
};

if ((event.body.toLowerCase() == "🤩")) {
    return api.sendMessage("Wow! Kisi cheez ka shock laga kya? 🤩", threadID);
};

if ((event.body.toLowerCase() == "😜")) {
    return api.sendMessage("Bade masti ke mood mein ho lagta hai! 😜", threadID);
};

if ((event.body.toLowerCase() == "🫣")) {
    return api.sendMessage("Kahi chhup ke dekh rhe ho kya? 🫣", threadID);
};

if ((event.body.toLowerCase() == "😮‍💨")) {
    return api.sendMessage("Thak gaye ho? Relax kar lo 😮‍💨", threadID);
};

if ((event.body.toLowerCase() == "🤓")) {
    return api.sendMessage("Scholar lag rahe ho 🤓", threadID);
};

if ((event.body.toLowerCase() == "🥶")) {
    return api.sendMessage("Bahut thand lag rahi hai kya? 🥶", threadID);
};

if ((event.body.toLowerCase() == "🥵")) {
    return api.sendMessage("Garmi ke maare pareshan lag rahe ho 🥵", threadID);
};

if ((event.body.toLowerCase() == "🫡")) {
    return api.sendMessage("Salute kar rahe ho kya? 🫡", threadID);
};

if ((event.body.toLowerCase() == "🫶")) {
    return api.sendMessage("Itna pyaar de rahe ho? 🫶", threadID);
};

if ((event.body.toLowerCase() == "👩‍💻") || (event.body.toLowerCase() == "👨‍💻")) {
    return api.sendMessage("Lagta hai coding ho rahi hai 👨‍💻", threadID);
};

if ((event.body.toLowerCase() == "🕺") || (event.body.toLowerCase() == "💃")) {
    return api.sendMessage("Dance kar rahe ho? Mazze le rahe ho! 🕺💃", threadID);
};

if ((event.body.toLowerCase() == "🎤")) {
    return api.sendMessage("Gaana suna rahe ho? 🎤", threadID);
};

if ((event.body.toLowerCase() == "📖")) {
    return api.sendMessage("Kya padhai kar rahe ho? 📖", threadID);
};

if ((event.body.toLowerCase() == "🛌")) {
    return api.sendMessage("Sone ka time ho gaya? 🛌", threadID);
};

if ((event.body.toLowerCase() == "👑")) {
    return api.sendMessage("Aap toh King/Queen lag rahe ho! 👑", threadID);
};

  if ((event.body.toLowerCase() == "😎")) {
    return api.sendMessage("Aap toh bilkul cool lag rahe ho 😎", threadID);
};

if ((event.body.toLowerCase() == "🤩")) {
    return api.sendMessage("Kuch acha dekh liya kya? 🤩", threadID);
};

if ((event.body.toLowerCase() == "👀")) {
    return api.sendMessage("Kya dekh rahe ho? 👀", threadID);
};

if ((event.body.toLowerCase() == "💀")) {
    return api.sendMessage("Lagta hai kuch funny dekh liya! 💀", threadID);
};

if ((event.body.toLowerCase() == "🥳")) {
    return api.sendMessage("Party ka mood lag raha hai! 🥳", threadID);
};

if ((event.body.toLowerCase() == "🧐")) {
    return api.sendMessage("Lagta hai koi mushkil sawaal puch rahe ho 🧐", threadID);
};

if ((event.body.toLowerCase() == "💡")) {
    return api.sendMessage("Aapke paas koi nayi idea hai? 💡", threadID);
};

if ((event.body.toLowerCase() == "🚶‍♂️") || (event.body.toLowerCase() == "🚶‍♀️")) {
    return api.sendMessage("Kahaan ja rahe ho? 🚶‍♂️", threadID);
};

if ((event.body.toLowerCase() == "🔮")) {
    return api.sendMessage("Kya future dekh rahe ho? 🔮", threadID);
};

if ((event.body.toLowerCase() == "🔥")) {
    return api.sendMessage("Lagta hai sab kuch garam hai! 🔥", threadID);
};

if ((event.body.toLowerCase() == "🎉")) {
    return api.sendMessage("Celebration ka mood lag raha hai! 🎉", threadID);
};

if ((event.body.toLowerCase() == "💪")) {
    return api.sendMessage("Shakti dikhane ka time hai! 💪", threadID);
};

if ((event.body.toLowerCase() == "🤯")) {
    return api.sendMessage("Dimag ka dahi ho gaya? 🤯", threadID);
};

if ((event.body.toLowerCase() == "🍕")) {
    return api.sendMessage("Kya pizza khane ka man hai? 🍕", threadID);
};

if ((event.body.toLowerCase() == "🏆")) {
    return api.sendMessage("Aap toh champion lag rahe ho! 🏆", threadID);
};

if ((event.body.toLowerCase() == "🍀")) {
    return api.sendMessage("Lagta hai apne paas kuch lucky charm hai! 🍀", threadID);
};

if ((event.body.toLowerCase() == "🎧")) {
    return api.sendMessage("Koi music sun rahe ho? 🎧", threadID);
};

if ((event.body.toLowerCase() == "🧠")) {
    return api.sendMessage("Aapka dimag bohot tez lag raha hai 🧠", threadID);
};

if ((event.body.toLowerCase() == "💫")) {
    return api.sendMessage("Aapke aas paas kuch magic lag raha hai 💫", threadID);
};

if ((event.body.toLowerCase() == "🦸‍♂️") || (event.body.toLowerCase() == "🦸‍♀️")) {
    return api.sendMessage("Superhero lag rahe ho! 🦸‍♂️", threadID);
};

  if ((event.body.toLowerCase() == "🤡")) {
    return api.sendMessage("Lagta hai aap clown ban gaye ho 🤡", threadID);
};

if ((event.body.toLowerCase() == "🦄")) {
    return api.sendMessage("Aap toh unicorn lag rahe ho! 🦄", threadID);
};

if ((event.body.toLowerCase() == "🎮")) {
    return api.sendMessage("Kya game khel rahe ho? 🎮", threadID);
};

if ((event.body.toLowerCase() == "👻")) {
    return api.sendMessage("Bhoot lag rahe ho kya? 👻", threadID);
};

if ((event.body.toLowerCase() == "🦋")) {
    return api.sendMessage("Aap toh butterfly jaise khubsurat ho! 🦋", threadID);
};

if ((event.body.toLowerCase() == "🍉")) {
    return api.sendMessage("Lagta hai aapko fruits ka shauq hai! 🍉", threadID);
};

if ((event.body.toLowerCase() == "🛸")) {
    return api.sendMessage("Aap spaceship par hai? 🛸", threadID);
};

if ((event.body.toLowerCase() == "🍄")) {
    return api.sendMessage("Lagta hai aapke paas magical powers hain 🍄", threadID);
};

if ((event.body.toLowerCase() == "🚀")) {
    return api.sendMessage("Aap toh space mein ja rahe ho! 🚀", threadID);
};

if ((event.body.toLowerCase() == "🍩")) {
    return api.sendMessage("Kya donuts ka shauq hai? 🍩", threadID);
};

if ((event.body.toLowerCase() == "🛹")) {
    return api.sendMessage("Aap skateboard par hai! 🛹", threadID);
};

if ((event.body.toLowerCase() == "🌮")) {
    return api.sendMessage("Tacos ka man ho raha hai! 🌮", threadID);
};

if ((event.body.toLowerCase() == "🧊")) {
    return api.sendMessage("Aap thode thanda lag rahe ho 🧊", threadID);
};

if ((event.body.toLowerCase() == "⚡")) {
    return api.sendMessage("Aap electric hai! ⚡", threadID);
};

if ((event.body.toLowerCase() == "👽")) {
    return api.sendMessage("Kya aap alien ho? 👽", threadID);
};

if ((event.body.toLowerCase() == "🦧")) {
    return api.sendMessage("Kya aapki dosti har kisam ke animals ke saath hai? 🦧", threadID);
};

if ((event.body.toLowerCase() == "💎")) {
    return api.sendMessage("Aap toh diamond ki tarah chamak rahe ho! 💎", threadID);
};

if ((event.body.toLowerCase() == "🧘‍♂️") || (event.body.toLowerCase() == "🧘‍♀️")) {
    return api.sendMessage("Yoga ka time hai! 🧘‍♀️", threadID);
};

if ((event.body.toLowerCase() == "🍀")) {
    return api.sendMessage("Aapke paas lucky charm hai! 🍀", threadID);
};

if ((event.body.toLowerCase() == "🍫")) {
    return api.sendMessage("Chocolate khane ka man hai 🍫", threadID);
};

if ((event.body.toLowerCase() == "🎻")) {
    return api.sendMessage("Aap violin bajane ka mood mein ho! 🎻", threadID);
};

if ((event.body.toLowerCase() == "🎺")) {
    return api.sendMessage("Aap trumpet bajane ka mood mein ho! 🎺", threadID);
};

if ((event.body.toLowerCase() == "🎻")) {
    return api.sendMessage("Music mein doob gaye ho! 🎻", threadID);
};

if ((event.body.toLowerCase() == "🚴‍♂️") || (event.body.toLowerCase() == "🚴‍♀️")) {
    return api.sendMessage("Cycle par jaana hai kya? 🚴‍♀️", threadID);
};

if ((event.body.toLowerCase() == "🧑‍🎤")) {
    return api.sendMessage("Singer ban gaye ho kya? 🧑‍🎤", threadID);
};

if ((event.body.toLowerCase() == "🎧")) {
    return api.sendMessage("Music ka shauq hai 🎧", threadID);
};

if ((event.body.toLowerCase() == "💬")) {
    return api.sendMessage("Aap baat kar rahe ho? 💬", threadID);
};

if ((event.body.toLowerCase() == "🖋️")) {
    return api.sendMessage("Kya likh rahe ho? 🖋️", threadID);
};

if ((event.body.toLowerCase() == "🧩")) {
    return api.sendMessage("Puzzle solve kar rahe ho? 🧩", threadID);
};

if ((event.body.toLowerCase() == "🧃")) {
    return api.sendMessage("Juice ka man ho raha hai! 🧃", threadID);
};

if ((event.body.toLowerCase() == "🎬")) {
    return api.sendMessage("Koi movie dekh rahe ho? 🎬", threadID);
};

if ((event.body.toLowerCase() == "🦄")) {
    return api.sendMessage("Aap unicorn ki tarah magical ho! 🦄", threadID);
};

if ((event.body.toLowerCase() == "🍒")) {
    return api.sendMessage("Kya cherry ka shauq hai? 🍒", threadID);
};

if ((event.body.toLowerCase() == "🧠")) {
    return api.sendMessage("Aapka dimag kitna tez hai! 🧠", threadID);
};

if ((event.body.toLowerCase() == "🥚")) {
    return api.sendMessage("Egg khane ka man hai? 🥚", threadID);
};

if ((event.body.toLowerCase() == "⚽")) {
    return api.sendMessage("Football ka shauq hai? ⚽", threadID);
};

if ((event.body.toLowerCase() == "🌙")) {
    return api.sendMessage("Chand ki roshni mein kho gaye ho? 🌙", threadID);
};

if ((event.body.toLowerCase() == "🕹️")) {
    return api.sendMessage("Video games mein busy ho? 🕹️", threadID);
};

if ((event.body.toLowerCase() == "🦉")) {
    return api.sendMessage("Aap owl ki tarah sharp ho! 🦉", threadID);
};

if ((event.body.toLowerCase() == "🌻")) {
    return api.sendMessage("Aap sunflower ki tarah bright ho! 🌻", threadID);
};

if ((event.body.toLowerCase() == "🧊")) {
    return api.sendMessage("Kuch thanda chaiye? 🧊", threadID);
};

if ((event.body.toLowerCase() == "💀")) {
    return api.sendMessage("Aap bilkul spooky lag rahe ho! 💀", threadID);
};

if ((event.body.toLowerCase() == "🏀")) {
    return api.sendMessage("Basketball ka shauq hai? 🏀", threadID);
};

if ((event.body.toLowerCase() == "🎸")) {
    return api.sendMessage("Guitar bajane ka man hai? 🎸", threadID);
};

if ((event.body.toLowerCase() == "🌍")) {
    return api.sendMessage("Aap duniya ke safar par ho! 🌍", threadID);
};

  if ((event.body.toLowerCase() == "🍕")) {
    return api.sendMessage("Pehli baat, pizza ka mood hai? 🍕", threadID);
};

if ((event.body.toLowerCase() == "🎮")) {
    return api.sendMessage("Game khel rahe ho? 🎮", threadID);
};

if ((event.body.toLowerCase() == "🎨")) {
    return api.sendMessage("Aap artist ban gaye ho? ??", threadID);
};

if ((event.body.toLowerCase() == "🌵")) {
    return api.sendMessage("Kya desert mein ho? 🌵", threadID);
};

if ((event.body.toLowerCase() == "🍉")) {
    return api.sendMessage("Fruits ka shauq hai 🍉", threadID);
};

if ((event.body.toLowerCase() == "🎻")) {
    return api.sendMessage("Violin bajane ka mann hai 🎻", threadID);
};

if ((event.body.toLowerCase() == "🦄")) {
    return api.sendMessage("Aap toh unicorn ho! 🦄", threadID);
};

if ((event.body.toLowerCase() == "🎷")) {
    return api.sendMessage("Saxophone ka time hai! 🎷", threadID);
};

if ((event.body.toLowerCase() == "🍉")) {
    return api.sendMessage("Aapko watermelon pasand hai? 🍉", threadID);
};

if ((event.body.toLowerCase() == "🎡")) {
    return api.sendMessage("Ferris wheel par ho kya? 🎡", threadID);
};

if ((event.body.toLowerCase() == "🍀")) {
    return api.sendMessage("Aapko good luck chahiye? 🍀", threadID);
};

if ((event.body.toLowerCase() == "🎂")) {
    return api.sendMessage("Cake ka time hai! 🎂", threadID);
};

if ((event.body.toLowerCase() == "🛵")) {
    return api.sendMessage("Scooter pe ja rahe ho? 🛵", threadID);
};

if ((event.body.toLowerCase() == "🍪")) {
    return api.sendMessage("Cookies ka time hai! 🍪", threadID);
};

if ((event.body.toLowerCase() == "🦓")) {
    return api.sendMessage("Zebra ki tarah unique ho aap! 🦓", threadID);
};

if ((event.body.toLowerCase() == "🎃")) {
    return api.sendMessage("Aap Halloween mode mein lag rahe ho! 🎃", threadID);
};

if ((event.body.toLowerCase() == "🐉")) {
    return api.sendMessage("Aap dragon ban gaye ho! 🐉", threadID);
};

if ((event.body.toLowerCase() == "🦩")) {
    return api.sendMessage("Flamingo ban gaya hai koi! 🦩", threadID);
};

if ((event.body.toLowerCase() == "💌")) {
    return api.sendMessage("Dil se kuch bhejna hai? 💌", threadID);
};

if ((event.body.toLowerCase() == "🥳")) {
    return api.sendMessage("Celebration ka time hai! 🥳", threadID);
};

if ((event.body.toLowerCase() == "🎮")) {
    return api.sendMessage("Game khel rahe ho? 🎮", threadID);
};

if ((event.body.toLowerCase() == "🍍")) {
    return api.sendMessage("Pineapple ka shauq hai? 🍍", threadID);
};

if ((event.body.toLowerCase() == "🦋")) {
    return api.sendMessage("Aap butterfly ki tarah khubsurat ho! 🦋", threadID);
};

if ((event.body.toLowerCase() == "🎺")) {
    return api.sendMessage("Trumpet bajana hai! 🎺", threadID);
};

if ((event.body.toLowerCase() == "🍓")) {
    return api.sendMessage("Strawberry ka time hai! 🍓", threadID);
};

if ((event.body.toLowerCase() == "💎")) {
    return api.sendMessage("Aap diamond ki tarah chamak rahe ho! 💎", threadID);
};

if ((event.body.toLowerCase() == "🥥")) {
    return api.sendMessage("Coconut ka shauq hai? 🥥", threadID);
};

if ((event.body.toLowerCase() == "🦒")) {
    return api.sendMessage("Giraffe ban gaya koi! 🦒", threadID);
};

if ((event.body.toLowerCase() == "🍒")) {
    return api.sendMessage("Cherry khane ka mann hai? 🍒", threadID);
};

if ((event.body.toLowerCase() == "🦓")) {
    return api.sendMessage("Zebra ki tarah unique lag rahe ho! 🦓", threadID);
};

if ((event.body.toLowerCase() == "🐢")) {
    return api.sendMessage("Aap turtle ki tarah slow aur steady ho! 🐢", threadID);
};

if ((event.body.toLowerCase() == "🧸")) {
    return api.sendMessage("Aap teddy bear ki tarah pyare ho! 🧸", threadID);
};

if ((event.body.toLowerCase() == "🍓")) {
    return api.sendMessage("Aapko strawberries pasand hai? 🍓", threadID);
};

if ((event.body.toLowerCase() == "🎸")) {
    return api.sendMessage("Guitar bajana hai kya? 🎸", threadID);
};

if ((event.body.toLowerCase() == "🦅")) {
    return api.sendMessage("Eagle ki tarah upar ud rahe ho! 🦅", threadID);
};

if ((event.body.toLowerCase() == "💥")) {
    return api.sendMessage("Explosion hone wala hai! 💥", threadID);
};

if ((event.body.toLowerCase() == "🐘")) {
    return api.sendMessage("Aap elephant ki tarah strong ho! 🐘", threadID);
};

if ((event.body.toLowerCase() == "🍟")) {
    return api.sendMessage("Fries ka mood hai? 🍟", threadID);
};

if ((event.body.toLowerCase() == "🧊")) {
    return api.sendMessage("Thanda kuch chahiye? 🧊", threadID);
};

if ((event.body.toLowerCase() == "🎬")) {
    return api.sendMessage("Film dekh rahe ho? 🎬", threadID);
};

if ((event.body.toLowerCase() == "🍾")) {
    return api.sendMessage("Celebration ka time hai! 🍾", threadID);
};

if ((event.body.toLowerCase() == "🎤")) {
    return api.sendMessage("Aap singer ban gaye ho! 🎤", threadID);
};

if ((event.body.toLowerCase() == "🦸‍♂️") || (event.body.toLowerCase() == "🦸‍♀️")) {
    return api.sendMessage("Superhero lag rahe ho! 🦸‍♂️", threadID);
};

if ((event.body.toLowerCase() == "🍔")) {
    return api.sendMessage("Burger khane ka mood hai? 🍔", threadID);
};

if ((event.body.toLowerCase() == "🦶")) {
    return api.sendMessage("Aapko chalna ka shauq hai? 🦶", threadID);
};

if ((event.body.toLowerCase() == "🍿")) {
    return api.sendMessage("Movie time! Popcorn le lo 🍿", threadID);
};

if ((event.body.toLowerCase() == "🦗")) {
    return api.sendMessage("Grasshopper ki tarah jump kar rahe ho! 🦗", threadID);
};

if ((event.body.toLowerCase() == "🧃")) {
    return api.sendMessage("Juice ka time hai! 🧃", threadID);
};

if ((event.body.toLowerCase() == "🎪")) {
    return api.sendMessage("Circus ka maza le rahe ho? 🎪", threadID);
};

if ((event.body.toLowerCase() == "🥑")) {
    return api.sendMessage("Avocado ka shauq hai? 🥑", threadID);
};
  
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
 var msg = {
  body: `

➤  『 ${name} 』

➤  ❝ ${rand} ❞


☄︎──────────────────☄︎`
};

return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }

