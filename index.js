const Discord = require('discord.js');
const bot = new Discord.Client();
const jokes = require('./jokes');


bot.login('NjU1NTQzNjg4NjU4OTQ0MDEx.XfVzYQ.C6e-PSLqmMd7jDNSRO0IePBe828');

bot.on('message', msg => {
    let userMsg = msg.content;

    function dad(filter) {
        if (userMsg.includes(`${filter} `) && msg.author.bot === false) {
            dadMsg = userMsg.split(`${filter} `).pop();
            msg.reply(`Hi ${dadMsg}, i'm dad.`);
        }
    }
    dad("i'm")
    dad("im")
    dad("I'm")
    dad("Im")
    dad("I’m")
    dad("i’m")
    dad("I am")
    
    if (userMsg === "!joke") {
        let random = Math.floor(Math.random() * jokes.length);
        msg.reply(jokes[random]);
    }
});