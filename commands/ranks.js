exports.run = (client, message) => {
      message.channel.send({embed: {
        title: "List of Singapore Army discord ranks.",
		  color: 3447003,
  description: "This can be used with the ;rank command! Please note that ranking people to the ranks not stated here will result in a demotion! You may not rank people higher than your role otherwise you will be punished!",
  fields: [{
    name: "Brigadier General (BG)",
    value: "Colonel (COL)"
  },{
    name: "Lieutenant Colonel (LTC)",
    value: "Major (MAJ)"
  },{
    name: "Captain (CPT)",
    value: "Lieutenant (LTA)"
  },{
    name: "2nd Lieutenant (2LT)",
    value: "Chief Warrant Officer (CWO)"
  },{
    name: "Senior Warrant Officer (SWO)",
    value: "Warrant Officer (WO)"
  },{
    name: "Master Sergeant (MSG)",
    value: "Staff Sergeant (SSG)"
  },{
    name: "Sergeant (SG)",
    value: "Corporal (CPL)"
  },{
    name: "Lance Corporal (LCP)",
    value: "Private (PTE)"
  },{
    name: "Recruit (REC)",
    value: "Discord Admin"
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
