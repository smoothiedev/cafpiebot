const Discord = require('discord.js');
module.exports = member => {
const modlog = member.guild.channels.find('name', 'pie-log');
  //${member.user.username}
  const embed = new Discord.RichEmbed()
  .setTimestamp()
  .setColor(0xffff00)
  .setTitle("User Joined")
  .setThumbnail(`${member.user.avatarURL}`)
  .setDescription(`\n`)
  .addField("Username:",`${member.user.username} (${member.user})`,true)
  .addField("Role Added:",`SendMessage`,false)
.setFooter(`User: ${member.user.username}`,`${member.user.avatarURL}`);
member.guild.channels.get(modlog.id).send({embed}).catch(console.error);
}
