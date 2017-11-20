const Discord = require('discord.js');
const ms = require('ms');
exports.run = (client, message, args) => {
  const rank = args.slice(1).join(' ');
  const user = message.mentions.users.first();
  const modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel').catch(console.error);
  if (rank.length < 1) return message.reply('You must supply a rank.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to demote them.').catch(console.error);
  const muteRole = client.guilds.get(message.guild.id).roles.find('name', `${rank}`);
  const embed = new Discord.RichEmbed()
  .setTimestamp()
  .setColor(0x00ff00)
  .setTitle("User Rank Modified")
  .setThumbnail(`${user.avatarURL}`)
  .setDescription(`\n`)
  .addField("Username:",`${user.username} (${user})`,true)
  .addField("Moderator:",`${message.author.username} (${message.author})`, true)
  .addField("Removed Rank:",`${rank}`, false)
  .setFooter(`User: ${user.username}`,`${user.avatarURL}`);

  user.sendMessage({embed: {
color: 0x00ff00,
title: "User rank removed",
description: (`\nYour rank has been removed!\n`),
fields: [{
  name : "Username:",
  value : `${user.username} (${user})`,
  inline : true
},{
  name : "Administrator:",
  value :`${message.author.username} (${message.author})`,
  inline : true
},{
  name : "Removed rank:",
  value : `${rank}`,
  inline : false
},{
  name : "If you believe that this was an error, please contact the Administrator involved.",
  value : `~ Union Army`,
  inline : false
}]
  }})


  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);

    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
     message.channel.send({embed}).catch(console.error);
    });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rrank','demote','delrole'],
  permLevel: 3
};

exports.help = {
  name: 'removerank',
  description: 'Removes a role to the discord user.',
  usage: 'removerank [mention] [role]'
};
