const Discord = require('discord.js');
exports.run = (client, message) => {
  const modlog = client.channels.find('name', 'pie-log');
  const anno2 = client.channels.find('name', 'reports');
  const mainuser = message.guild.member(message.author);
const say = message.slice(8).join(' ');
if (say.length < 1) return message.reply('Please specify on the reason for reporting.').catch(console.error);
message.delete()

client.channels.get(anno2.id).send({embed: {
  color: 0xffff00,
  title: `Report filed`,
  description: ``,
  fields: [{
    name: "Reporter:",
    value: `${message.author}`
  },{
  name: "Report reason:",
  value: `${say}`
  }]
    }
    })


mainuser.sendMessage({embed: {
  color: 0xff0000,
  title: "Report Filed",
  description: (`\n**You have filed a report**\n`),
fields: [{
name: "Your discord tag:",
value: `${message.author}`
},{
name: "Reason:",
value: `${say}`
},{
name: "If you believe that this was an error, please contact a high rank immediately, false report may get you warned!",
value: "Otherwise, your report will be dealt with. You may also head over to the mainframe to file one: https://www.roblox.com/games/1191242893/Mainframe"
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
name: 'report',
description: 'Files a report to the high ranks.',
usage: 'report message'
};
