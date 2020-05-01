const Discord = require('discord.js');
module.exports = member => {
const modlog = member.guild.channels.find('name', 'pie-log');
const muteRole = member.guild.roles.find("name","SendMessage")
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
  
member.guild.member(member.user).addRole(muteRole)
member.guild.channels.get(modlog.id).send({embed}).catch(console.error);
  
     member.user.sendMessage({embed: {
    color: 0xff0000,
    title: "Welcome to Opitimal Bureau discord!",
    description: ("\n\n:flag_sg: Welcome to the **𝔒𝔭𝔦𝔱𝔦𝔪𝔞𝔩 𝔅𝔲𝔯𝔢𝔞𝔲** discord! :flag_sg:"),
    fields:[{
      name: "A safe discord for everyone:",
      value: `Please follow the rules and regulations of discord and the server. Rules can be found under #rules.`,
      inline: true
    },{
      name: "Welcome to **𝔒𝔭𝔦𝔱𝔦𝔪𝔞𝔩 𝔅𝔲𝔯𝔢𝔞𝔲** discord once again!",
      value: `Have a great time here! :)`,
      inline: false
    }]
      })

                             }
