const Discord = require('discord.js');
var sleep = require('system-sleep');
exports.run = (client, message) => {
    const modlog = client.channels.find('name', 'bot-commands');
    const user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply('You must mention someone to battle them.').catch(console.error);
if (message.channel.name == "bot-commands") {
message.channel.send({embed: {
  color: 0xff0000,
  title: ":fire: Battle Starting in 3!",
  description: (``),
fields: [{
name: `${message.author.username} :`,
value: `100/100`,
inline: true
},{
  name: `${user.username} :`,
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
name: `${message.author.username} :`,
value: `100/100`,
inline: true
},{
  name: `${user.username} :`,
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
name: `${message.author.username} :`,
value: `100/100`,
inline: true
},{
  name: `${user.username} :`,
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
name: `${message.author.username} :`,
value: `100/100`,
inline: true
},{
  name: `${user.username} :`,
  value: `100/100`,
  inline: true
  }],
}})
  while(true) {
    sleep(3*1000) // sleep for 1 seconds
    var b = Math.floor(Math.random() * 25) + 1 
    var c = 100 // author
    var d = 100 // user
    message.channel.send({embed: {
      color: 0x00ff00,
      title: "Battle status: In progress..",
      description: (`:inbox_tray: ${message.author.username} did ${b} damage to ${user.username}`),
      footer: {text : "4 more turns"},
    fields: [{
    name: `${message.author.username} :`,
    value: `${c}/100`,
    inline: true
    },{
      name: `${user.username} :`,
      value: `${d-b}/100`,
      inline: true
      }]
    }})
    var e = d-b
    var wtf = Math.floor(Math.random() * 25) + 1 
    sleep(3*1000)
    message.channel.send({embed: {
      color: 0xff0000,
      title: "Battle status: In progress..",
      description: (`:outbox_tray: ${user.username} did ${wtf} damage to ${message.author.username}`),
      footer: {text : "4 more turns"},
    fields: [{
    name: `${message.author.username} :`,
    value: `${c-wtf}/100`,
    inline: true
    },{
      name: `${user.username} :`,
      value: `${e}/100`,
      inline: true
      }]
    }})
    var f = c-wtf
var kys = Math.floor(Math.random() * 25) + 1 
sleep(3*1000)
    message.channel.send({embed: {
      color: 0x00ff00,
      title: "Battle status: In progress..",
      description: (`:inbox_tray: ${message.author.username} did ${kys} damage to ${user.username}`),
      footer: {text : "3 more turns"},
    fields: [{
    name: `${message.author.username} :`,
    value: `${f}/100`,
    inline: true
    },{
      name: `${user.username}:`,
      value: `${e-kys}/100`,
      inline: true
      }]
    }})
    var y = e-kys
var w0t = Math.floor(Math.random() * 25) + 1 
    sleep(3*1000)
    message.channel.send({embed: {
      color: 0xff0000,
      title: "Battle status: In progress..",
      description: (`:outbox_tray: ${user.username} did ${w0t} damage to ${message.author.username}`),
      footer: {text : "3 more turns"},
    fields: [{
    name: `${message.author.username} :`,
    value: `${f-w0t}/100`,
    inline: true
    },{
      name: `${user.username} :`,
      value: `${y}/100`,
      inline: true
      }]
    }})
    var wowow = f-w0t
var lao = Math.floor(Math.random() * 25) + 1 
sleep(3*1000)
    message.channel.send({embed: {
      color: 0x00ff00,
      title: "Battle status: In progress..",
      description: (`:inbox_tray: ${message.author.username} did ${lao} damage to ${user.username}`),
      footer: {text : "2 more turns"},
    fields: [{
    name: `${message.author.username} :`,
    value: `${wowow}/100`,
    inline: true
    },{
      name: `${user.username} :`,
      value: `${y-lao}/100`,
      inline: true
      }]
    }})
    var cb = y-lao
var w0td = Math.floor(Math.random() * 25) + 1 
    sleep(3*1000)
    message.channel.send({embed: {
      color: 0xff0000,
      title: "Battle status: In progress..",
      description: (`:outbox_tray: ${user.username} did ${w0td} damage to ${message.author.username}`),
      footer: {text : "2 more turns"},
    fields: [{
    name: `${message.author.username} :`,
    value: `${wowow-w0td}/100`,
    inline: true
    },{
      name: `${user.username} :`,
      value: `${cb}/100`,
      inline: true
      }]
    }})
    var ggg = wowow-w0td
var siala = Math.floor(Math.random() * 25) + 1 
    sleep(3*1000)
    message.channel.send({embed: {
      color: 0x00ff00,
      title: "Battle status: In progress..",
      description: (`:inbox_tray: ${message.author.username} did ${siala} damage to ${user.username}`),
      footer: {text : "1 more turn"},
    fields: [{
    name: `${message.author.username} :`,
    value: `${ggg}/100`,
    inline: true
    },{
      name: `${user.username} :`,
      value: `${cb-siala}/100`,
      inline: true
      }]
    }})
var fk = cb-siala
    var sialay = Math.floor(Math.random() * 25) + 1 
        sleep(3*1000)
        message.channel.send({embed: {
          color: 0xff0000,
          title: "Battle status: In progress..",
          description: (`:outbox_tray: ${user.username} did ${sialay} damage to ${message.author.username}`),
          footer: {text : "Last turn"},
        fields: [{
        name: `${message.author.username} :`,
        value: `${ggg-sialay}/100`,
        inline: true
        },{
          name: `${user.username} :`,
          value: `${fk}/100`,
          inline: true
          }]
        }})
        sleep(3*1000)
var win = ggg-sialay
if (fk > ggg-sialay) {
        message.channel.send({embed: {
          color: 0xffff00,
          title: "Battle status: Round ended!",
          description: (`:trophy: ${user.username} won the battle!`),
          footer: {text : `Winner is ${user.username}`},
        fields: [{
        name: `${message.author.username} :`,
        value: `${ggg-sialay}/100`,
        inline: true
        },{
          name: `${user.username} :`,
          value: `${fk}/100`,
          inline: true
          }]
        }})
        break
  } else {
    message.channel.send({embed: {
      color: 0xffff00,
      title: "Battle status: Round ended!",
      description: (`:trophy: ${message.author.username} won the battle!`),
      footer: {text : `Winner is ${message.author.username}`},
    fields: [{
    name: `${message.author.username} :`,
    value: `${ggg-sialay}/100`,
    inline: true
    },{
      name: `${user.username} :`,
      value: `${fk}/100`,
      inline: true
      }]
    }})
    break
}
  }
} else {
  message.channel.send({embed: {
    color: 0xff0000,
    title: "Quiet Channel",
    description: (``),
  fields: [{
  name: `${message.author.username}`,
  value: `This is a quiet channel, please do not use ;battle here! Head over to #bot-commands instead.`,
  inline: true
  }],
  }})
}

};

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
