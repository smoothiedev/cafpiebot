const Discord = require('discord.js');
exports.run = (client, message) => {
    const modlog = client.channels.find('name', 'pie-log');
    const user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply('You must mention someone to insult them.').catch(console.error);
message.delete()
const roll = Math.floor(Math.random() * 10) + 1  
if (roll = 1) {
  message.channel.send(`${user} You're a failed abortion whose birth certificate is an apology from the condom factory.`)
} else {
if (roll = 2) {
    message.channel.send(`${user} You must have been born on a highway, because that's where most accidents happen.`)
  } else {
    if (roll = 3) {
        message.channel.send(`${user} You are so ugly that when your mama dropped you off at school she got a fine for littering.`)
      }
      else {
        if (roll = 4) {
            message.channel.send(`${user} Dumbass.`)
          } else {
            if (roll = 5) {
                message.channel.send(`${user} Roses are red, violets are blue, I have 5 fingers, the 3rd ones for you.`)
              } else {
                if (roll = 6) {
                    message.channel.send(`${user} You bring everyone a lot of joy, when you leave the room.`)
                  }
                  else {
                    if (roll = 7) {
                        message.channel.send(`${user} I wasn't born with enough middle fingers to let you know how I feel about you.`)
                      }else {
                        if (roll = 8) {
                            message.channel.send(`${user} I'm jealous of all the people that haven't met you!`)
                          }else {
                            if (roll = 9) {
                                message.channel.send(`${user} You shouldn't play hide and seek, no one would look for you.`)
                              }else {
                                if (roll = 10) {
                                    message.channel.send(`${message.author} Well, the tables have turned. You're an idiot to trust a bot like me. KARMA.`)
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