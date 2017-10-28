const settings = require('../settings.json');
exports.run = (client, message, params) => {

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.sendMessage(`= Command List =\n\n[Use ${settings.prefix}help <commandname> for details]\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code:'asciidoc'});
    message.channel.send({embed: {
      color:0x0000FF,
      description: `${message.author}, A list of commands has been sent to you!`
    }
  })

    message.channel.send({embed: {
      color: 0xF033FF,
      title: "Pie - Bot avaliable commands",
      description: `= List of commands =\n\n**To find out more about a command use, ${settings.prefix}help <commandname> for more details.**\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`,
      timestamp: new Date(),
      footer: {
        icon_url: `${message.author.avatarURL}`,
        text: `User: ${message.author.username}`
      }
    }
  })
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send({embed: {
        color: 0xF033FF,
        title: `${command.help.name} Command`,
        description: `\n${command.help.description}\nusage: ${command.help.usage}`,
        timestamp: new Date(),
        footer: {
          icon_url: `${message.author.avatarURL}`,
          text: `User: ${message.author.username}`
        }
      }
    })
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'cmds', 'cmd'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};
