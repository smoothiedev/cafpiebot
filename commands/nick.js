const Discord = require('discord.js');
const ms = require('ms');
exports.run = (client, message, args) => {
  const nick = args.slice(1).join(' ');
  const user = message.mentions.users.first();
  const modlog = client.channels.find('name', '𝔪𝔬𝔡-𝔩𝔬𝔤');
  if (!modlog) return message.reply('I cannot find a mod-log channel').catch(console.error);
  if (nick.length < 1) return message.reply('Please enter a nickname!').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to nick them.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setTimestamp()
  .setColor(0xff0000)
  .setTitle("User Nickname Updated")
  .setThumbnail(`${user.avatarURL}`)
  .setDescription(`\n`)
  .addField("Username:",`${user.username} (${user})`,true)
  .addField("Moderator:", `${message.author.username} (${message.author})`,true)
  .addField("New Username:",`${nick}`,false)
.setFooter(`User: ${user.username}`,`${user.avatarURL}`);

user.sendMessage({embed: {
  color: 0xff0000,
  title: "Nickname Changed",
  description: (`\nYour nickname was changed!\n`),
fields:[{
name: "Moderator: ",
value: `${message.author.username} (${message.author})`
},{
  name: "New Username: ",
  value: `${nick}`
  },{
    name: "Your username has been changed mainly because you did not meet our username standards, it could be either not taggable in english or it is annoying. To know more about this standard, contact the moderator involved.",
    value: `You may change your username, however if it still doesn't meet our username standard, you may be nicked again or it may result in a mute until you change it.`
    }]
    }})

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);

  message.guild.member(user).setNickname(nick)
  client.channels.get(modlog.id).send({embed}).catch(console.error);
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'nick',
  description: 'changes the nickname of a user',
  usage: 'nick [mention] [newnick]'
};
