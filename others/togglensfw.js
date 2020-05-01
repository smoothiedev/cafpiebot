const Discord = require('discord.js');
const ms = require('ms');
exports.run = (client, message) => {
  const modlog = client.channels.find('name', 'pie-log');
  if (!modlog) return message.reply('I cannot find a pie-log channel').catch(console.error);
  const muteRole = client.guilds.get(message.guild.id).roles.find('name', `NSFW`);
  const embed = new Discord.RichEmbed()
  .setTimestamp()
  .setColor(0x00ff00)
  .setTitle("User NSFW access modified")
  .setThumbnail(`${message.author.avatarURL}`)
  .setDescription(`\n`)
  .addField("Username:",`${message.author.username} (${message.author})`,true)
  .addField("Allowed access to:",`NSFW`, false)
  .setFooter(`User: ${message.author.username}`,`${message.author.avatarURL}`);
  


  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);

if (message.guild.member(message.author).roles.has(muteRole.id)) {
message.guild.member(message.author).removeRole(muteRole);
      client.channels.get(modlog.id).sendMessage({embed: {
    color: 0xff0000,
    title: "User NSFW access modified",
    description: (`\n`),
    timestamp: new Date(),
   footer: {
      icon_url: `${message.author.avatarURL}`,
      text: (`User: ${message.author.username}`)
    },
    fields: [{
      name: "Username:",
      value: `${message.author.username} (${message.author})`,
      inline: false
    },{
      name: "Removed access to:",
      value: `NSFW`,
      inline: true
    }]
      }}).catch(console.error);
     message.channel.sendMessage({embed: {
    color: 0xff0000,
    title: "User NSFW access modified",
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
      name: "Removed access to:",
      value: `NSFW`,
      inline: true
    }]
      }}).catch(console.error);
} else {
    message.guild.member(message.author).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
     message.channel.send({embed}).catch(console.error);
    });
  }}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['togglensfw','nsfw','porn','rule34'],
  permLevel: 0
};

exports.help = {
  name: 'togglensfw',
  description: 'Allows you to access the #nsfw channel.',
  usage: 'togglensfw'
};

