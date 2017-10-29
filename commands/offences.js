exports.run = (client, message) => {
      message.channel.send({embed: {
        title: "Offences",
		  color: 3447003,
  description: "If they commit any offences listed below, you may take appropriate action according to the offences done.",
  fields: [{
    name: "[0] Posting NSFW",
    value: "NSFW can be in terms of gore, lewd or pornography related materials shall be dealt with a 3 days mute."
  },{
    name: "[1] Sending suspicious links",
    value: "Links that leads to phishing sites, IP loggers or any malware links shall be dealt with a 5 days mute."
  },{
    name: "[2] Sending dangerous files",
    value: "Sending files in discord that contains viruses, keyloggers etc shall be dealt with a guild kick."
  },{
    name: "[3] Impersonation",
    value: "Impersonating anyone who is in the discord shall be dealt with a guild kick if user persists to not change their nickname or stop."
  },{
    name: "[4] Breaking rules using bot commands",
    value: "Breaking the rules such as spamming, tagging everyone or bullying using ;say command shall be punishable with 10 days mute."
  },{
    name: "[5] Raiding",
    value: "Raiding discord shall be dealt with a guild ban as raiding is against discord TOS."
  }]
    }
	});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'offences',
  description: 'Lists offences for moderators',
  usage: 'offences'
};
