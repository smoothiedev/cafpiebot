const Discord = require('discord.js');
exports.run = (client, message) => {
const user = message.mentions.users.first();
const guildmember = message.guild.member(message.mentions.users.first());
if (message.mentions.users.size < 1) return message.reply('You must mention someone to info them.').catch(console.error);
message.channel.send({embed: {
    color: 0xff0000,
    title: `Info of ${user.username}`,
    description: (``),
  fields: [{
  name: `Discord ID`,
  value: `${user.id}`,
  inline: true
  },{
    name: `User status`,
    value: `${user.presence.status}`,
    inline: true
    },{
    name: `Username`,
    value: `${user.username}`,
    inline: true
    },{
        name: `Tag`,
        value: `${user.discriminator}`,
        inline: true
        },{
            name: `Account created at`,
            value: `${user.createdAt}`,
            inline: true
            },{
                name: `User joined guild at`,
                value: `${guildmember.joinedAt}`,
                inline: true
                },{
                    name: `Highest role`,
                    value: `${guildmember.highestRole}`,
                    inline: true
                    },{
                        name: `Permissions`,
                        value: `${guildmember.permissions}`,
                        inline: true
                        },{
                            name: `Server deaf`,
                            value: `${guildmember.serverDeaf}`,
                            inline: true
                            },{
                                name: `Server mute`,
                                value: `${guildmember.serverMute}`,
                                inline: true
                                }],
  }})
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'info',
description: 'Check the stats of a discord user.',
usage: 'info [mention]'
};