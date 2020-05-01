const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = async (client, message, args) => {
  const user = message.mentions.users.first();
  const modlog = client.channels.find('name', 'mod-log');
  const warn1 = client.guilds.get(message.guild.id).roles.find('name', 'Warning 1');
  const warn2 = client.guilds.get(message.guild.id).roles.find('name', 'Warning 2');
  const warn3 = client.guilds.get(message.guild.id).roles.find('name', 'Warning 3');
  const muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  const reason = args.splice(1, args.length).join(' ');
  const caseNum = await caseNumber(client, modlog);
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to remove their warn them.').catch(console.error);
  if (reason.length < 1) return message.reply('Please specify a reason for the unwarn!').catch(console.error);
  const embed = new RichEmbed()
  .setColor(0xffff00)
  .setTimestamp()
  .setTitle("Warning Removed")
  .setThumbnail(`${user.avatarURL}`)
  .setDescription(`\n`)
  .addField("Username:",`${user.username} (${user})`,true)
  .addField("Moderator:",`${message.author.username} (${message.author})`,true)
  .addField("Reason:",`${reason}`,false)
  .setFooter(`User: ${user.username}`,`${user.avatarURL}`);

  user.sendMessage({embed: {
    color: 0xff0000,
    title: "Warning removed",
    description: (`\n\nYour warning has been removed.`),
    fields:[{
      name: "Moderator:",
      value: `${message.author.username} (${message.author})`,
      inline: false
    },{
      name: "Remove Reason:",
      value: `${reason}`,
      inline: true
    },{
      name: "If you believe this was an error, please contact the moderator involved.",
      value: `Otherwise, please avoid breaking the rules again. Once you accumulate more than 3 warnings, it will be an auto mute.`,
      inline: false
    }]
      }})
    

if (message.guild.member(user).roles.has(warn3.id)) {
  message.guild.member(user).removeRole(warn3).then(() => {
    client.channels.get(modlog.id).send({embed}).catch(console.error);
    message.channel.send({embed}).catch(console.error);
  })
} else { if (message.guild.member(user).roles.has(warn2.id)) {
  message.guild.member(user).removeRole(warn2).then(() => {
    client.channels.get(modlog.id).send({embed}).catch(console.error);
    message.channel.send({embed}).catch(console.error);
  })


} else { if (message.guild.member(user).roles.has(warn1.id))  {
message.guild.member(user).removeRole(warn1).then(() => {
  client.channels.get(modlog.id).send({embed}).catch(console.error);
  message.channel.send({embed}).catch(console.error);
})

}else{
message.channel.send({embed : {
  color: 0xff0000,
  title: "Error!",
  description: (``),
  fields:[{
    name: `${user} has no warnings to remove!`,
    value: `Please check if this player has any warnings. If you believe this was an error please contact Pie#3429.`,
    inline: false
  }]
}})
}
}

}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['removewarn'],
  permLevel: 2
};

exports.help = {
  name: 'unwarn',
  description: 'Removes a warning to the mentioned user.',
  usage: 'unwarn [mention] [reason]'
};
