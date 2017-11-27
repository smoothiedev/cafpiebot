const Discord = require('discord.js');
exports.run = (client, message) => {
  const modlog = client.channels.find('name', 'pie-log');
  const anno2 = client.channels.find('name', 'trainings');
let say = message.content.split(" ").join(" ").slice(10)
if (say.length < 1) return message.reply('Please specify on what I have to say.').catch(console.error);
message.delete()

client.channels.get(anno2.id).send({embed: {
  color: 0xff0000,
  title: `Training Session`,
  description: ``,
  fields: [{
    name: "Trainer:",
    value: `${message.author}`
  },{
  name: "Message",
  value: `${say}`
  }]
    }
    })
client.channels.get(modlog.id).send({embed: {
      color: 0x0000FF,
      title: "Command input",
      description: `\n\n**Username:** \n${message.author.username} <${message.author}>\n**Command:** ;training ${say}`,
      timestamp: new Date(),
      footer: {
        icon_url: `${message.author.avatarURL}`,
        text: `User: ${message.author.username}`
      }
    }
  })
client.channels.get(anno2.id).send('@everyone')
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["tanno"],
permLevel: 1
};

exports.help = {
name: 'training',
description: 'Announces a training under the channel #trainings',
usage: 'training message'
};
