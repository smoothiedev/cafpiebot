const Discord = require('discord.js');
const ms = require('ms');
exports.run = (client, message, args) => {
  const reason = args.slice(1).join(' ');
  const user = message.mentions.users.first() || message.guild.members.get(args[0]);
  const modlog = client.channels.find('name', 'mod-log');
  const muteRole = client.guilds.get(message.guild.id).roles.find('name', 'SendMessage');
  if (!modlog) return message.reply('I cannot find a mod-log channel').catch(console.error);
  if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
  if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You did not mention someone or supply a User ID!').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setTimestamp()
  .setColor(0xff0000)
  .setTitle("User Muted")
  .setThumbnail(`${user.avatarURL}`)
  .setDescription(`\n`)
  .addField("Username:",`${user.username} (${user})`,true)
  .addField("Moderator:",`${message.author.username} (${message.author})`, true)
  .addField("Reason:",`${reason}`, false)
  .setFooter(`User: ${user.username}`,`${user.avatarURL}`);

  user.sendMessage({embed: {
color: 0xff0000,
title: "User muted warning",
description: (`\nYou have been muted!\n`),
fields: [{
  name : "Username:",
  value : `${user.username} (${user})`,
  inline : true
},{
  name : "Moderator:",
  value :`${message.author.username} (${message.author})`,
  inline : true
},{
  name : "Mute reason:",
  value : `${reason}`,
  inline : false
},{
  name : "If you believe that this was an error, please contact the moderator involved.",
  value : `Please avoid interacting with the server for the time being. However, if you have not been unmuted after the stated time, please contact the moderator immediately.`,
  inline : false
}]
  }})

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);
  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
     message.channel.send({embed}).catch(console.error);
    });
  }}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'mutes a mentioned user',
  usage: 'mute [mention] [reason]'
};
