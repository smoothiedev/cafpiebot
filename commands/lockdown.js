const ms = require('ms');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  const time = args.join(' ');
  const modlog = client.channels.find('name', 'mod-log');
  const validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send({embed: {
        color: 0x00ff00,
        title: "Server Lockdown",
        description: (`Server Lockdown has been lifted!\n`),
        fields: [{
          name: "Moderator:",
          value: `${message.author.username} (${message.author})`,
          inline: true
        },{
          name: "Lockdown timing:",
          value: `${ms(ms(time), { long:true })}`,
          inline: false
        },{
          name: "You are free to chat in the discord now, please avoid causing server lockdowns again!",
          value: `~ Union Army`,
          inline: false
        }]
          }})
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send({embed: {
        color: 0xff0000,
        title: "Server Lockdown",
        description: (`Server Lockdown has been initiated\n`),
        fields: [{
          name: "Moderator:",
          value: `${message.author.username} (${message.author})`,
          inline: true
        },{
          name: "Lockdown timing:",
          value: `${ms(ms(time), { long:true })}`,
          inline: false
        },{
          name: `You are not allowed to speak in this channel for ${ms(ms(time), { long:true })}, please wait for the lockdown to be lifted.`,
          value: `~ Union Army`,
          inline: false
        }]
          }}).then(() => { //(`Channel locked down for ${ms(ms(time), { long:true })}`)

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send({embed: {
            color: 0x00ff00,
            title: "Server Lockdown",
            description: (`Server Lockdown has been lifted!\n`),
            fields: [{
              name: "Moderator:",
              value: `${message.author.username} (${message.author})`,
              inline: true
            },{
              name: "Lockdown timing:",
              value: `${ms(ms(time), { long:true })}`,
              inline: false
            },{
              name: "You are free to chat in the discord now, please avoid causing server lockdowns again!",
              value: `~ Union Army`,
              inline: false
            }]
              }})).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
  const embed = new Discord.RichEmbed()
  .setColor(0xff0000)
  .setTimestamp()
	.setTitle("Server Lockdown")
  .setDescription(`\n`)
  .addField("Moderator:",`${message.author.username} (${message.author})`,true)
  .addField("Lockdown Timing:",`${ms(ms(time), { long:true })}`,false)
  client.channels.get(modlog.id).send({embed}).catch(console.error);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ld'],
  permLevel: 2
};

exports.help = {
  name: 'lockdown',
  description: 'This will lock a channel down for the set duration, be it in hours, minutes or seconds.',
  usage: 'lockdown <duration>'
};
