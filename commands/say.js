const Discord = require('discord.js');
exports.run = (client, message) => {
    const modlog = client.channels.find('name', 'pie-log');
let say = message.content.split(" ").join(" ").slice(4)
if (say.length < 1) return message.reply('Please specify on what I have to say.').catch(console.error);
message.delete()
message.channel.send( say
)
client.channels.get(modlog.id).send({embed: {
    color: 0x0000FF,
    title: "Command input",
    description: `\n\n**Username:** \n${message.author.username} <${message.author}>\n**Command:** ;say${say}`,
    timestamp: new Date(),
    footer: {
      icon_url: `${message.author.avatarURL}`,
      text: `User: ${message.author.username}`
    }
  }
})
};



exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'say',
description: 'To make the bot say something.',
usage: 'say message'
};