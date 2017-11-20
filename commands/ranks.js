exports.run = (client, message) => {
      message.channel.send({embed: {
        title: "List of Union Army discord ranks.",
		  color: 3447003,
  description: "This can be used with the ;rank command! Please note that ranking people to the ranks not stated here will result in a demotion! You may not rank people higher than your role otherwise you will be punished!",
  fields: [{
    name: "Brigadier General",
    value: "Colonel"
  },{
    name: "Lieutenant Colonel",
    value: "Major"
  },{
    name: "Captain",
    value: "First Lieutenant"
  },{
    name: "Second Lieutenant",
    value: "Sergeant Major of the Army"
  },{
    name: "Quartermaster Sergeant",
    value: "Ordinance Sergeant"
  },{
    name: "First Sergeant",
    value: "Sergeant"
  },{
    name: "Corporal",
    value: "Private"
  },{
    name: "Volunteer",
    value: "Discord Moderator"
  },{
    name: "Discord Admin",
    value: ""
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
  name: 'ranks',
  description: 'Lists ranks avaliable in this discord.',
  usage: 'ranks'
};
