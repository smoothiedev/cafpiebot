const Discord = require('discord.js');
module.exports = member => {
const modlog = member.guild.channels.find('name', 'pie-log');
const muteRole = member.guild.roles.find("name","SendMessage")
  //${member.user.username}
member.guild.member(member.user).addRole(muteRole)


                             }
