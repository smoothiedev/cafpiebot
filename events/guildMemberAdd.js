const Discord = require('discord.js');
module.exports = member => {
const modlog = guild.channels.find('name', 'pie-log');
  let guild = member.guild;
  //${member.user.username}
  const embed = new Discord.RichEmbed()
  .setTimestamp()
  .setColor(0xff0000)
  .setTitle("User Joined")
  .setThumbnail(`${member.user.avatarURL}`)
  .setDescription(`\n`)
  .addField("Username:",`${member.user.username} (${member.user})`,true)
  .addField("Role Added:",`SendMessage`,false)
.setFooter(`User: ${member.user.username}`,`${member.user.avatarURL}`);
guild.channels.get(modlog.id).send({embed}).catch(console.error);
};
