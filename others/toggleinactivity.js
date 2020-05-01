const Discord = require('discord.js');
const ms = require('ms');
exports.run = (client, message) => {
  const modlog = client.channels.find('name', 'pie-log');
  if (!modlog) return message.reply('I cannot find a pie-log channel').catch(console.error);
  const muteRole = client.guilds.get(message.guild.id).roles.find('name', `Inactive`);
  


  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);

if (message.guild.member(message.author).roles.has(muteRole.id)) {
message.guild.member(message.author).removeRole(muteRole);
     message.channel.sendMessage({embed: {
    color: 0xff0000,
    title: "Inactivity tag removed.",
    timestamp: new Date(),
    description: (`\n`),
    footer: {
      icon_url: `${message.author.avatarURL}`,
      text: (`User: ${message.author.username}`)
    },
    fields: [{
      name: "Username:",
      value: `${message.author.username} (${message.author})`,
      inline: false
    },{
      name: "Removed:",
      value: `Inactivity`,
      inline: true
    }]
      }}).catch(console.error);
} else {
  message.channel.sendMessage({embed: {
    color: 0xff0000,
    title: "Error",
    timestamp: new Date(),
    description: (`\n`),
    footer: {
      icon_url: `${message.author.avatarURL}`,
      text: (`User: ${message.author.username}`)
    },
    fields: [{
      name: "You do not have an inactivity notice!",
      value: `To get the inactive tag, please file an inactivity notice using ;inactivity.`,
      inline: false
    }]
      }}).catch(console.error);
    };
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['active'],
  permLevel: 0
};

exports.help = {
  name: 'toggleinactivity',
  description: 'Removes your inactivity tag if you have one.',
  usage: 'toggleinactivity'
};
