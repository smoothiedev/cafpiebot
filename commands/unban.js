const Discord = require("discord.js");
exports.run = (client, message, args) => {
  const reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  const user = args[0];
  const modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the unban.');
  if (!user) return message.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);

  const embed = new Discord.RichEmbed()
  .setColor(0xff0000)
  .setTimestamp()
	.setTitle("Guild Unban")
  .setDescription(`\n`)
  .addField("Username:",`${user}`,true)
  .addField("Administrator:",`${message.author.username} (${message.author})`,true)
  .addField("Unban Reason:",`${reason}`,false)
  client.channels.get(modlog.id).send({embed}).catch(console.error);
  
  message.guild.unban(user);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'unban',
  description: 'Unbans the user.',
  usage: 'unban [mention] [reason]'
};
