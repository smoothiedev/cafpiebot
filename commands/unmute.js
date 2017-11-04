const Discord = require('discord.js');
const ms = require('ms');
exports.run = (client, message, args) => {
  const reason = args.slice(1).join(' ');
  const user = message.mentions.users.first();
  const modlog = client.channels.find('name', 'mod-log');
  const muteRole = client.guilds.get(message.guild.id).roles.find('name', 'SendMessage');
  if (!modlog) return message.reply('I cannot find a mod-log channel').catch(console.error);
  if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
  if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setTimestamp()
  .setColor(0x00ff00)
  .setTitle("User Unmuted")
  .setThumbnail(`${user.avatarURL}`)
  .setDescription("\n")
  .addField("Username:",`${user.username} (${user})`,true)
  .addField("Moderator",`${message.author.username} (${message.author})`,true)
  .addField("Unmute Reason:",`${reason}`,false)
.setFooter(`User: ${user.username}`,`${user.avatarURL}`);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);

  user.sendMessage({embed: {
    color: 0xff0000,
    title: "User unmuted",
    description: (`You have been muted!\n`),
    fields: [{
      name: "Moderator:",
      value: `${message.author.username} (${message.author})`,
      inline: true
    },{
      name: "Unmute Reason:",
      value: `${reason}`,
      inline: false
    },{
      name: "You are free to chat in the discord now, please avoid breaking the rules next time!",
      value: `If you continue breaking the rules, you may be kicked or banned next time!`,
      inline: false
    }]
      }})

      
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
      message.channel.send({embed}).catch(console.error);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unmute',
  description: 'unmutes a mentioned user',
  usage: 'unmute [mention] [reason]'
};
