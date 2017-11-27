const Discord = require('discord.js');
exports.run = (client, message) => {
  const modlog = client.channels.find('name', 'pie-log');
  const anno2 = client.channels.find('name', 'inactivity-notice');
const guildmember = message.content.split(" ").join(" ").slice(12)
const say = args.slice(1).join(' ');
if (say.length < 1) return message.reply('Please specify on what I have to say.').catch(console.error);
message.delete()

client.channels.get(anno2.id).send({embed: {
  color: 0xffff00,
  title: `Inactivity Notice`,
  description: ``,
  fields: [{
    name: "ROBLOX Username:",
    value: `${guildmember}`
  },{
  name: "Message",
  value: `${say}`
  }]
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
name: 'inactivity',
description: 'Files an inactivity notice under the channel #inactivity-notice',
usage: 'inactivity (ROBLOX USERNAME) message'
};
