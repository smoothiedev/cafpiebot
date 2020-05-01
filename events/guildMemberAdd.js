const Discord = require('discord.js');
module.exports = member => {
const modlog = member.guild.channels.find('name', '𝔭𝔦𝔢-𝔩𝔬𝔤');
const muteRole = member.guild.roles.find("name","𝔖𝔢𝔫𝔡𝔐𝔢𝔰𝔰𝔞𝔤𝔢")
  //${member.user.username}
member.guild.member(member.user).addRole(muteRole)


                             }
