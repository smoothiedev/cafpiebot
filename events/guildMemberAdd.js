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
   member.user.sendMessage({embed: {
    color: 0xff0000,
    title: "Welcome to The Union Army discord!",
    description: (`\n\n:flag_us: Welcome to the **ᴛʜᴇ ᴜɴɪᴏɴ ᴀʀᴍʏ** discord! :flag_us: 
```css
"Fight for our country!"
Year: 1861 - 1865
```
`
Group link: https://www.roblox.com/My/Groups.aspx?gid=3604726
`
```css
This group is based on The Civil War of America in year 1861 - 1865. It is the land force that fought for the union during The Civil War. If you are new to this group and discord, please make sure to head over to #role-request and wait for a high rank to verify you and give you a role!
```
`
Discord Invite link: https://discord.gg/FtzRtks
`
`),
    fields:[{
      name: "Important message:",
      value: `Please remember to head over to #bot-commands and use !verify command to verify that you have a ROBLOX account.`,
      inline: false
    },{
      name: "A safe discord for everyone:",
      value: `Please follow the rules and regulations of discord and the server. Rules can be found under #rules.`,
      inline: true
    },{
      name: "Welcome to the Union Army discord once again!",
      value: `Have a great time here! :)`,
      inline: false
    }]
      }})
member.guild.member(member.user).addRole(muteRole)
member.guild.channels.get(modlog.id).send({embed}).catch(console.error);
}
