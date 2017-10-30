const Discord = require('discord.js');
exports.run = (client, message) => {
  const modlog = client.channels.find('name', 'pie-log');
    const user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply('You must mention someone to insult them.').catch(console.error);
message.delete()
if (message.channel.name == "on-duty"){
  message.channel.send({embed: {
    color: 0xff0000,
    title: "Quiet Channel",
    description: (``),
  fields: [{
  name: `${message.author.username}`,
  value: `This is a quiet channel, please do not use ;insult here as this is for #on-duty only! Please head over to other channels such as #off-duty or #bot-commands.`,
  inline: true
  }],
  }})
} else {
var b = Math.floor(Math.random() * 15) + 1  
console.log(`${b}`)
if (b == 1) {
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
if (b == 2) { 
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
if (b == 3) { 
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
        if (b == 4) { 
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
            if (b == 5) { 
          
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
                if (b == 6) { 
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
                    if (b == 7) { 
                        
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
                        if (b == 8) { 
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
                            if (b == 9) { 
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
                                if (b == 10) {  
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
                                }else {
                                  if (b == 11) {  
                                    message.channel.send({embed: {
                                      color: 0xff0000,
                                      title: "GET REKT KID",
                                      description: (``),
                                      footer: {text: "hahahahahahaha"},
                                  fields: [{
                                    name: "Insult:",
                                    value: `No need for insults, ${user}'s face says it all.`
                                  }],
                                    }})
                                  }else {
                                    if (b == 12) {  
                                      message.channel.send({embed: {
                                        color: 0xff0000,
                                        title: "GET REKT KID",
                                        description: (``),
                                        footer: {text: "hahahahahahaha"},
                                    fields: [{
                                      name: "Insult:",
                                      value: `My mom says pigs don’t eat biscuits… So I better take that one out of ${user} hand.`
                                    }],
                                      }})
                                    }else {
                                      if (b == 13) {  
                                        message.channel.send({embed: {
                                          color: 0xff0000,
                                          title: "GET REKT KID",
                                          description: (``),
                                          footer: {text: "hahahahahahaha"},
                                      fields: [{
                                        name: "Insult:",
                                        value: `${user} is so ugly that ${user} scare the shit back into people.`
                                      }],
                                        }})}else {
                                          if (b == 14) {  
                                            message.channel.send({embed: {
                                              color: 0xff0000,
                                              title: "GET REKT KID",
                                              description: (``),
                                              footer: {text: "hahahahahahaha"},
                                          fields: [{
                                            name: "Insult:",
                                            value: `If I were to slap ${user}, it would be considered animal abuse!`
                                          }],
                                            }})
                                          }else {
                                            if (b == 15) {  
                                              message.channel.send({embed: {
                                                color: 0xff0000,
                                                title: "GET REKT KID",
                                                description: (``),
                                                footer: {text: "hahahahahahaha"},
                                            fields: [{
                                              name: "Insult:",
                                              value: `Why don't ${user} check eBay and see if they have a life for sale.`
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
}
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
