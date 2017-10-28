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
  const caseNum = await caseNumber(client, modlog);
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
  const reason = args.splice(1, args.length).join(' ') || `Awaiting moderator's input. Use ${settings.prefix}reason ${caseNum} <reason>.`;
  const embed = new RichEmbed()
  .setColor(0xffff00)
  .setTimestamp()
  .setTitle("Warning Issued")
  .setThumbnail(`${user.avatarURL}`)
  .setDescription(`\n`)
  .addField("Username:",`${user.username} (${user})`,true)
  .addField("Moderator:",`${message.author.username} (${message.author})`,true)
  .addField("Reason:",`${reason}`,false)
  .setFooter(`User: ${user.username}`,`${user.avatarURL}`);

  user.sendMessage({embed: {
    color: 0xff0000,
    title: "Warning given",
    description: (`\n\nYou have been issued a warning`),
    fields:[{
      name: "Moderator:",
      value: `${message.author.username} (${message.author})`,
      inline: false
    },{
      name: "Warn Reason:",
      value: `${reason}`,
      inline: true
    },{
      name: "If you believe this was an error, please contact the moderator involved.",
      value: `Otherwise, please avoid breaking the rules again. Once you accumulate more than 3 warnings, it will be an auto mute.`,
      inline: false
    }]
      }})
    

if (message.guild.member(user).roles.has(warn3.id)) {
message.channel.send(`User, ${user}, has 3 warnings already! Auto muting...`);
user.sendMessage({embed: {
  color: 0xff0000,
  title: "User Auto Muted",
  description: (`You have been auto muted!`),
  fields: [{
    name: "Moderator:",
    value: `Pie Bot`,
    inline: true
  },{
    name: "Warning issued by:",
    value: `${message.author.username} (${message.author})`,
    inline: true
  },{
    name: "Mute Reason:",
    value: `[Auto Mute] Received more than 3 warnings!`,
    inline: false
  }]
}})
message.guild.member(user).addRole(muteRole)
message.guild.member(user).removeRole(warn1)
message.guild.member(user).removeRole(warn2)
message.guild.member(user).removeRole(warn3)
client.channels.get(modlog.id).send({embed}).catch(console.error);
client.channels.get(modlog.id).send({embed: {
  color: 0xff0000,
  title: "User Auto Muted",
  description: `\n`,
  fields: [{
    name: "Username:",
    value: `${user.username} (${user})`,
    inline: false
  },
  {
    name: "Moderator:",
    value: `Pie Bot`,
    inline: true
  },{
    name: "Warning issued by:",
    value: `${message.author.username} (${message.author})`,
    inline: true
  },{
    name: "Mute Reason:",
    value: `[Auto Mute] User received more than 3 warnings!`,
    inline: false
  }],
  timestamp: new Date(),
  footer: {
    icon_url: `${user.avatarURL}`,
    text: `User: ${user.username}`
  }
}
});



} else { if (message.guild.member(user).roles.has(warn2.id)) {
  message.guild.member(user).addRole(warn3).then(() => {
    client.channels.get(modlog.id).send({embed}).catch(console.error);
    message.channel.send({embed}).catch(console.error);
  })


} else { if (message.guild.member(user).roles.has(warn1.id))  {
message.guild.member(user).addRole(warn2).then(() => {
  client.channels.get(modlog.id).send({embed}).catch(console.error);
  message.channel.send({embed}).catch(console.error);
})

}else{ message.guild.member(user).addRole(warn1).then(() => {
  client.channels.get(modlog.id).send({embed}).catch(console.error);
  message.channel.send({embed}).catch(console.error);
})
}

}}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'warn',
  description: 'Issues a warning to the mentioned user.',
  usage: 'warn [mention] [reason]'
};