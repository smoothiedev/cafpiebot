const Discord = require('discord.js');
exports.run = (client, message) => {
message.delete()
message.channel.send({embed: {
color: 0x00FF00,
description: "Stopping the bot..."
  }
  })
  console.log("Stopping the bot..")
server:stop()
};


exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 4
};

exports.help = {
name: 'stop',
description: 'Stops the bot,',
usage: 'stop'
};
