const Discord = require('discord.js');
var sleep = require('system-sleep');
exports.run = (client, message) => {
    const modlog = client.channels.find('name', 'pie-log');
    const user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply('You must mention someone to battle them.').catch(console.error);
message.channel.send({embed: {
  color: 0xff0000,
  title: ":fire: Battle Starting in 3!",
  description: (``),
fields: [{
name: `${message.author}:`,
value: `100/100`,
inline: true
},{
  name: `${user}:`,
  value: `100/100`,
  inline: true
  }],
}})
sleep(1*1000)
message.channel.send({embed: {
  color: 0xff0000,
  title: ":fire: Battle Starting in 2!",
  description: (``),
fields: [{
name: `${message.author}:`,
value: `100/100`,
inline: true
},{
  name: `${user}:`,
  value: `100/100`,
  inline: true
  }],
}})
sleep(1*1000)
message.channel.send({embed: {
  color: 0xff0000,
  title: ":fire: Battle Starting in 1!",
  description: (``),
fields: [{
name: `${message.author}:`,
value: `100/100`,
inline: true
},{
  name: `${user}:`,
  value: `100/100`,
  inline: true
  }],
}})
sleep(1*1000)
message.channel.send({embed: {
  color: 0xff0000,
  title: ":fire: Battle Started!",
  description: (``),
fields: [{
name: `${message.author}:`,
value: `100/100`,
inline: true
},{
  name: `${user}:`,
  value: `100/100`,
  inline: true
  }],
}})
  while(true) {
    sleep(1*1000); // sleep for 1 seconds
    var b = Math.floor(Math.random() * 25) + 1 
    var c = 100 // author
    var d = 100 // user
    message.channel.send({embed: {
      color: 0x00ff00,
      title: "Battle status: In progress..",
      description: (`:inbox_tray: ${message.author} did ${b} damage to ${user}`),
      footer: "4 more turns",
    fields: [{
    name: `${message.author}:`,
    value: `${c-b}/100`,
    inline: true
    },{
      name: `${user}:`,
      value: `${d}/100`,
      inline: true
      }]
    }})
    var e = c-b
    var wtf = Math.floor(Math.random() * 25) + 1 
    sleep(1*1000);
    message.channel.send({embed: {
      color: 0xff0000,
      title: "Battle status: In progress..",
      description: (`:outbox_tray: ${user} did ${wtf} damage to ${message.author}`),
      footer: "4 more turns",
    fields: [{
    name: `${message.author}:`,
    value: `${c}/100`,
    inline: true
    },{
      name: `${user}:`,
      value: `${d-wtf}/100`,
      inline: true
      }]
    }})
    var f = d-wtf
var kys = Math.floor(Math.random() * 25) + 1 
    message.channel.send({embed: {
      color: 0x00ff00,
      title: "Battle status: In progress..",
      description: (`:inbox_tray: ${message.author} did ${kys} damage to ${user}`),
      footer: "3 more turns",
    fields: [{
    name: `${message.author}:`,
    value: `${e-kys}/100`,
    inline: true
    },{
      name: `${user}:`,
      value: `${d}/100`,
      inline: true
      }]
    }})
    var y = e-kys
var w0t = Math.floor(Math.random() * 25) + 1 
    sleep(1*1000);
    message.channel.send({embed: {
      color: 0xff0000,
      title: "Battle status: In progress..",
      description: (`:outbox_tray: ${user} did ${w0t} damage to ${message.author}`),
      footer: "3 more turns",
    fields: [{
    name: `${message.author}:`,
    value: `${y}/100`,
    inline: true
    },{
      name: `${user}:`,
      value: `${f-w0t}/100`,
      inline: true
      }]
    }})
    var wowow = f-w0t
var lao = Math.floor(Math.random() * 25) + 1 
    message.channel.send({embed: {
      color: 0x00ff00,
      title: "Battle status: In progress..",
      description: (`:inbox_tray: ${message.author} did ${lao} damage to ${user}`),
      footer: "2 more turns",
    fields: [{
    name: `${message.author}:`,
    value: `${y-lao}/100`,
    inline: true
    },{
      name: `${user}:`,
      value: `${wowow}/100`,
      inline: true
      }]
    }})
    var cb = y-lao
var w0td = Math.floor(Math.random() * 25) + 1 
    sleep(1*1000);
    message.channel.send({embed: {
      color: 0xff0000,
      title: "Battle status: In progress..",
      description: (`:outbox_tray: ${user} did ${w0td} damage to ${message.author}`),
      footer: "2 more turns",
    fields: [{
    name: `${message.author}:`,
    value: `${y-w0td}/100`,
    inline: true
    },{
      name: `${user}:`,
      value: `${cb}/100`,
      inline: true
      }]
    }})
    var ggg = y-w0td
var siala = Math.floor(Math.random() * 25) + 1 
    sleep(1*1000);
    message.channel.send({embed: {
      color: 0x00ff00,
      title: "Battle status: In progress..",
      description: (`:inbox_tray: ${message.author} did ${siala} damage to ${user}`),
      footer: "1 more turn",
    fields: [{
    name: `${message.author}:`,
    value: `${ggg}/100`,
    inline: true
    },{
      name: `${user}:`,
      value: `${cb-siala}/100`,
      inline: true
      }]
    }})
var fk = cb-siala
    var sialay = Math.floor(Math.random() * 25) + 1 
        sleep(1*1000);
        message.channel.send({embed: {
          color: 0xff0000,
          title: "Battle status: In progress..",
          description: (`:outbox_tray: ${user} did ${sialay} damage to ${message.author}`),
          footer: "Last turn",
        fields: [{
        name: `${message.author}:`,
        value: `${ggg-sialay}/100`,
        inline: true
        },{
          name: `${user}:`,
          value: `${fk}/100`,
          inline: true
          }]
        }})
        sleep(1*1000);
var win = ggg-sialay
if (fk > ggg-sialay) {
        message.channel.send({embed: {
          color: 0xffff00,
          title: "Battle status: Round ended!",
          description: (`:trophy: ${user} won the battle!`),
          footer: `Winner is ${user}`,
        fields: [{
        name: `${message.author}:`,
        value: `${ggg-sialay}/100`,
        inline: true
        },{
          name: `${user}:`,
          value: `${fk}/100`,
          inline: true
          }]
        }})
        break
  } else {
    message.channel.send({embed: {
      color: 0xff0000,
      title: "Battle status: Round ended!",
      description: (`:trophy: ${message.author} won the battle!`),
      footer: `Winner is ${message.author}`,
    fields: [{
    name: `${message.author}:`,
    value: `${ggg-sialay}/100`,
    inline: true
    },{
      name: `${user}:`,
      value: `${fk}/100`,
      inline: true
      }]
    }})
    break
}
}};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'battle',
description: 'Mention someone to battle.',
usage: 'battle [mention]'
};
