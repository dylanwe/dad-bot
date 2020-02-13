const Discord = require('discord.js');
const bot = new Discord.Client();
const fetch = require('node-fetch');


bot.login(BOTKEY);

bot.on('message', msg => {
    let userMsg = msg.content;

    function dad(filter) {
        if (userMsg.includes(`${filter} `) && msg.author.bot === false) {
            dadMsg = userMsg.split(`${filter} `).pop();
            msg.reply(`Hi ${dadMsg}, I'm dad.`);
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
        fetch(`https://icanhazdadjoke.com/slack`)
            .then(resp => resp.json())
            .then(json => {
                msg.reply(json.attachments[0].text);
            })
    }
});

