const Discord = require('discord.js');
exports.run = (client, message) => {
  const modlog = client.channels.find('name', '𝔭𝔦𝔢-𝔩𝔬𝔤');
  const anno2 = client.channels.find('name', '𝔄𝔫𝔫𝔬𝔲𝔫𝔠𝔢𝔪𝔢𝔫𝔱𝔰');
let say = message.content.split(" ").join(" ").slice(6)
if (say.length < 1) return message.reply('Please specify on what I have to say.').catch(console.error);
message.delete()
client.channels.get(anno2.id).send({embed: {
color: 0xff0000,
title: `Server Announcement`,
description: `**Announcer:** ${message.author}\n**Message:** ${say}`,
  }
  })
  client.channels.get(modlog.id).send({embed: {
    color: 0x0000FF,
    title: "Command input",
    description: `\n\n**Username:** \n${message.author.username} <${message.author}>\n**Command:** ;sanno${say}`,
    timestamp: new Date(),
    footer: {
      icon_url: `${message.author.avatarURL}`,
      text: `User: ${message.author.username}`
    }
  }
})
client.channels.get(anno2.id).send('@everyone')
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 2
};

exports.help = {
name: 'sanno',
description: 'Announces something under the channel #announcements',
usage: 'sanno message'
};
