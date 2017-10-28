exports.run = (client, message) => {
      message.channel.send({embed: {
        title: "List of Canadian Army discord ranks.",
		  color: 3447003,
  description: "This can be used with the ;rank command!",
  fields: [{
    name: "General Officers (BGen-Gen)",
    value: "Discord Admin"
  },{
    name: "Discord Moderator",
    value: "Field Grade Officers (Maj-Col)"
  },{
    name: "Allied Representatives",
    value: "RCAF"
  },{
    name: "CADTC",
    value: "RCMP"
  },{
    name: "Company Grade Officers (2Lt-Cpt)",
    value: "Staff Non-Commissioned Officers (WO-CWO)"
  },{
    name: "Non-Commissioned Officers (Cpl-Sgt)",
    value: "Junior Enlisted (PTE B-PTE T)"
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