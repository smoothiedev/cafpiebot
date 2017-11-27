const Discord = require('discord.js');
exports.run = (client, message) => {
  const modlog = client.channels.find('name', 'pie-log');
  const anno2 = client.channels.find('name', 'inactivity-notice');
const mainuser = message.guild.member(message.author);
    const guildmember = message.content.split(" ").join(" ").slice(12)
if (say.length < 1) return message.reply('Please specify on your reason for being inactive.').catch(console.error);
message.delete()

client.channels.get(anno2.id).send({embed: {
  color: 0xffff00,
  title: `Inactivity Notice`,
  description: ``,
  fields: [{
    name: "Inactive user:",
    value: `${message.author}`
  },{
  name: "Reason:",
  value: `${guildmember}`
  }]
    }
    })

mainuser.sendMessage({embed: {
  color: 0xff0000,
  title: "Inactivity Notice Filed",
  description: (`\n**You have filed an inactivity notice!**\n`),
fields: [{
name: "Your discord tag:",
value: `${message.author}`
},{
name: "Reason:",
value: `${say}`
},{
name: "If you believe that this was an error, please use the command ;active.",
value: "Otherwise, please use the command ;active after you are not inactive anymore to remove your inactive tag."
}]
    }})
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
usage: 'inactivity message'
};
