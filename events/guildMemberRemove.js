const Discord = require('discord.js');
module.exports = member => {
    const modlog = member.guild.channels.find('name', 'pie-log');
    const guild = member.guild.member(member);
    //${member.user.username}
    const embed = new Discord.RichEmbed()
    .setTimestamp()
    .setColor(0xff0000)
    .setTitle("User Left")
    .setThumbnail(`${member.user.avatarURL}`)
    .setDescription(`\n`)
    .addField("Username:",`${member.user.username} (${member.user})`,true)
    .addField("Highest role:",`${guild.highestRole}`,true)
  .setFooter(`User: ${member.user.username}`,`${member.user.avatarURL}`);
  member.guild.channels.get(modlog.id).send({embed}).catch(console.error);
  };
