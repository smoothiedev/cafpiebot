const Discord = require('discord.js');
const ms = require('ms');
exports.run = (client, message, args) => {
  const modlog = client.channels.find('name', 'pie-log');
  if (!modlog) return message.reply('I cannot find a pie-log channel').catch(console.error);
  const muteRole = client.guilds.get(message.guild.id).roles.find('name', `NSFW`);
  const embed = new Discord.RichEmbed()
  .setTimestamp()
  .setColor(0x00ff00)
  .setTitle("User NSFW access modified")
  .setThumbnail(`${user.avatarURL}`)
  .setDescription(`\n`)
  .addField("Username:",`${user.username} (${user})`,true)
  .addField("Allowed access to:",`NSFW`, false)
  .setFooter(`User: ${user.username}`,`${user.avatarURL}`);
  
const embed2 = new Discord.RichEmbed()
  .setTimestamp()
  .setColor(0x00ff00)
  .setTitle("User NSFW access modified")
  .setThumbnail(`${user.avatarURL}`)
  .setDescription(`\n`)
  .addField("Username:",`${user.username} (${user})`,true)
  .addField("Removed access to:",`NSFW`, false)
  .setFooter(`User: ${user.username}`,`${user.avatarURL}`);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);

if message.guild.member(user).hasRole(muteRole).then(() => {
message.guild.member(user).removeRole(muteRole);
      client.channels.get(modlog.id).send({embed2}).catch(console.error);
     message.channel.send({embed2}).catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
     message.channel.send({embed}).catch(console.error);
    });
  }}
  )

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['togglensfw','nsfw','porn','rule31'],
  permLevel: 0
};

exports.help = {
  name: 'togglensfw',
  description: 'Allows you to access the #nsfw channel.',
  usage: 'togglensfw'
};
