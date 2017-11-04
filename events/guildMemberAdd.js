const Discord = require('discord.js');
module.exports = member => {
const modlog = member.guild.channels.find('name', 'pie-log');
const muteRole = ("376052336117940235").roles.find("name","SendMessage")
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
member.user.addRole(muteRole)
member.guild.channels.get(modlog.id).send({embed}).catch(console.error);
}
