const Discord = require('discord.js');
exports.run = (client, message) => {
  const modlog = client.channels.find('name', 'pie-log');
let say = message.content.split(" ").join(" ").slice(5)
if (say.length < 1) return message.reply('Please specify on what I have to say.').catch(console.error);
message.delete()
message.channel.send({embed: {
color: 0xff0000,
title: `Announcement`,
description: ``,
fields: [{
  name: "Announcer:",
  value: `${message.author}`
},{
name: "Message",
value: `${say}`
}]
  }
  })
  client.channels.get(modlog.id).send({embed: {
    color: 0x0000FF,
    thumbnail: `${message.author.avatarURL}`,
    title: "Command input",
    description: ``,
    fields: [{
      name: "User:",
      value: `${message.author.username} (${message.author})`
    },{
    name: "Command input:",
    value: `;anno ${say}`
    }],
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
permLevel: 2
};

exports.help = {
name: 'anno',
description: 'To make the bot say something using embeds.',
usage: 'anno message'
};