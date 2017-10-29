const Discord = require('discord.js');
exports.run = (client, message) => {
    const modlog = client.channels.find('name', 'pie-log');
    const user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply('You must mention someone to insult them.').catch(console.error);
message.delete()
const roll = Math.floor(Math.random() * 10) + 1  
let b = roll

if (b = 1) {
  message.channel.send({embed: {
    color: 0xff0000,
    title: "GET REKT KID",
    description: (``),
    footer: {text: "hahahahahahaha"},
fields: [{
  name: "Insult:",
  value: `${user} is a failed abortion whose birth certificate is an apology from the condom factory.`
}],
  }})
} else {
if (b = 2) {
    message.channel.send({embed: {
      color: 0xff0000,
      title: "GET REKT KID",
      description: (``),
      footer: {text: "hahahahahahaha"},
  fields: [{
    name: "Insult:",
    value: `${user} must have been born on a highway, because that's where most accidents happen.`
  }],
    }})
  } else {
if (b = 3) {
        message.channel.send({embed: {
          color: 0xff0000,
          title: "GET REKT KID",
          description: (``),
          footer: {text: "hahahahahahaha"},
      fields: [{
        name: "Insult:",
        value: `${user} is so ugly that when your mama dropped you off at school she got a fine for littering.`
      }],
        }})
      }
      else {
        if (b = 4) {
          message.channel.send({embed: {
            color: 0xff0000,
            title: "GET REKT KID",
            description: (``),
            footer: {text: "hahahahahahaha"},
        fields: [{
          name: "Insult:",
          value: `${user} Dumbass.`
        }],
          }})
          } else {
            if (b = 5) {
          
                message.channel.send({embed: {
                  color: 0xff0000,
                  title: "GET REKT KID",
                  description: (``),
                  footer: {text: "hahahahahahaha"},
              fields: [{
                name: "Insult:",
                value: `Roses are red, violets are blue, I have 5 fingers, the 3rd ones for ${user}.`
              }],
                }})
              } else {
                if (b = 6) {
                    message.channel.send({embed: {
                      color: 0xff0000,
                      title: "GET REKT KID",
                      description: (``),
                      footer: {text: "hahahahahahaha"},
                  fields: [{
                    name: "Insult:",
                    value: `${user} bring everyone a lot of joy, when ${user} leaves the room.`
                  }],
                    }})
                  }
                  else {
                    if (b = 7) {
                        
                        message.channel.send({embed: {
                          color: 0xff0000,
                          title: "GET REKT KID",
                          description: (``),
                          footer: {text: "hahahahahahaha"},
                      fields: [{
                        name: "Insult:",
                        value: `I wasn't born with enough middle fingers to let you know how I feel about ${user}.`
                      }],
                        }})
                      }else {
                        if (b = 8) {
                            message.channel.send({embed: {
                              color: 0xff0000,
                              title: "GET REKT KID",
                              description: (``),
                              footer: {text: "hahahahahahaha"},
                          fields: [{
                            name: "Insult:",
                            value: `I'm jealous of all the people that haven't met ${user}!`
                          }],
                            }})
                          }else {
                            if (b = 9) {
                                message.channel.send({embed: {
                                  color: 0xff0000,
                                  title: "GET REKT KID",
                                  description: (``),
                                  footer: {text: "hahahahahahaha"},
                              fields: [{
                                name: "Insult:",
                                value: `${user} shouldn't play hide and seek, no one would look for ${user}.`
                              }],
                                }})
                              }else {
                                if (b = 10) {
                                  message.channel.send({embed: {
                                    color: 0xff0000,
                                    title: "KARMA BITCH",
                                    description: (``),
                                    footer: {text: "God is respectful hahahahahahaha"},
                                fields: [{
                                  name: "Insult:",
                                  value: `${message.author} Well, the tables have turned. You're an idiot to trust a bot like me. KARMA.`
                                }],
                                  }})
                                  }
    }
  }
}
                  }
                }
              }
            }
          }
        }

client.channels.get(modlog.id).send({embed: {
    color: 0x0000FF,
    title: "Command input",
    description: `\n\n**Username:** \n${message.author.username} <${message.author}>\n**Command:** ;insult ${user}`,
    timestamp: new Date(),
    footer: {
      icon_url: `${message.author.avatarURL}`,
      text: `User: ${message.author.username}`
    }
  }
})
};




exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'insult',
description: 'To make the bot insult someone.',
usage: 'insult [mention]'
};
