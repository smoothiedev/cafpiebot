const Discord = require('discord.js');
exports.run = (client, message) => {
  const modlog = client.channels.find('name', 'pie-log');
  const anno2 = client.channels.find('name', 'inactivity-notice');
const guildmember = message.content.split(" ").join(" ").slice(12)
const muteRole = client.guilds.get(message.guild.id).roles.find('name', `Inactive`);
const say = args.slice(1).join(' ');
if (say.length < 1) return message.reply('Please specify on the reason for going inactive.').catch(console.error);
message.delete()
message.guild.member(message.author).addRole(muteRole);
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

message.author.sendMessage({embed: {
  color: 0xff0000,
  title: "Inactivity Notice Filed",
  description: (`\n**You have filed an inactivity notice!**\n`),
fields: [{
name: "ROBLOX Username:",
value: `${guildmember}`
},{
name: "Reason:",
value: `${say}`
},{
name: "If you believe that this was an error, please use the command ;active.",
value: "Otherwise, please use the command ;active after you are not inactive anymore to remove your inactive tag."
}]
    }});
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