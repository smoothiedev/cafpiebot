const chalk = require('chalk');
const Discord = require("discord.js");
module.exports = client => { // eslint-disable-line no-unused-vars
console.log(chalk.bgGreen.black('I\'m Online'))
let guild = client.guild;
const modlog = client.guild.channels.find('name', 'on-duty');
const embed = new RichEmbed()
.setColor(0x00ff00)
.setTimestamp()
.setTitle("Bot Status")
.setThumbnail(`${user.avatarURL}`)
.setDescription(`\n`)
.addField("Hey Pie the bot is",`Online! :ok_hand:`,true)
.setFooter(`Bot is currently online!`);
client.guild.channels.get(modlog.id).send({embed}).catch(console.error);
}
