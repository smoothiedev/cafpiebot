const Discord = require('discord.js');
module.exports = member => {
  const modlog = guild.channels.find('name', 'pie-log');
    let guild = member.guild;
    var role = "SendMessage"
const send = guild.get(message.guild.id).roles.find('name', 'SendMessage');
const PTE = guild.get(message.guild.id).roles.find('name', 'Private (PTE)');
const LCP = guild.get(message.guild.id).roles.find('name', 'Lance Corporal (LCP)');
const CPL = guild.get(message.guild.id).roles.find('name', 'Corporal (CPL)');

const SG = guild.get(message.guild.id).roles.find('name', 'Sergeant (SG)');
const SSG = guild.get(message.guild.id).roles.find('name', 'Staff Sergeant (SSG)');
const MSG = guild.get(message.guild.id).roles.find('name', 'Master Sergeant (MSG)');

const WO = guild.get(message.guild.id).roles.find('name', 'Warrant Officer (WO)');
const SWO = guild.get(message.guild.id).roles.find('name', 'Senior Warrant Officer (SWO)');
const CWO = guild.get(message.guild.id).roles.find('name', 'Chief Warrant Officer (CWO)');

const TWOLT = guild.get(message.guild.id).roles.find('name', '2nd Lieutenant (2LT)');
const LTA = guild.get(message.guild.id).roles.find('name', 'Lieutenant (LTA)');
const CPT = guild.get(message.guild.id).roles.find('name', 'Captain (CPT)');

const MAJ = guild.get(message.guild.id).roles.find('name', 'Major (MAJ)');
const LTC = guild.get(message.guild.id).roles.find('name', 'Lieutenant Colonel (LTC)');
const COL = guild.get(message.guild.id).roles.find('name', 'Colonel (COL)');

const BG = guild.get(message.guild.id).roles.find('name', 'Brigadier/Major General (BG/MG)');
const LG = guild.get(message.guild.id).roles.find('name', 'Lieutenant-General (LG)');

const VCDF = guild.get(message.guild.id).roles.find('name', 'Vice Chief of Defence Force (VCDF)');
const CDF = guild.get(message.guild.id).roles.find('name', 'Chief of Defense Force (CDF)');

if (message.guild.member(user).roles.has(send.id)) {
  role = "SendMessage"
} else {
  if (message.guild.member(user).roles.has(PTE.id)) {
    role = "Private (PTE)"
} else {
  if (message.guild.member(user).roles.has(LCP.id)) {
    role = "Lance Corporal (LCP)"
}  else {
  if (message.guild.member(user).roles.has(CPL.id)) {
    role = "Corporal (CPL)"
}  else {
  if (message.guild.member(user).roles.has(SG.id)) {
    role = "Sergeant (SG)"
} else {
  if (message.guild.member(user).roles.has(SSG.id)) {
    role = "Staff Sergeant (SSG)"
} else {
  if (message.guild.member(user).roles.has(MSG.id)) {
    role = "Master Sergeant (MSG)"
} else {
  if (message.guild.member(user).roles.has(WO.id)) {
    role = "Warrant Officer (WO)"
} else {
  if (message.guild.member(user).roles.has(SWO.id)) {
    role = "Senior Warrant Officer (SWO)"
  } else {
    if (message.guild.member(user).roles.has(CWO.id)) {
      role = "Chief Warrant Officer (CWO)"
    } else {
      if (message.guild.member(user).roles.has(TWOLT.id)) {
        role = "2nd Lieutenant (2LT)"
      } else {
        if (message.guild.member(user).roles.has(LTA.id)) {
          role = "Lieutenant (LTA)"
        } else {
          if (message.guild.member(user).roles.has(CPT.id)) {
            role = "Captain (CPT)"
          } else {
            if (message.guild.member(user).roles.has(MAJ.id)) {
              role = "Major (MAJ)"
            } else {
              if (message.guild.member(user).roles.has(LTC.id)) {
                role = "Lieutenant Colonel (LTC)"
              } else {
                if (message.guild.member(user).roles.has(COL.id)) {
                  role = "Colonel (COL)"
                } else {
                  if (message.guild.member(user).roles.has(BG.id)) {
                    role = "Brigadier/Major General (BG/MG)"
                  } else {
                    if (message.guild.member(user).roles.has(LG.id)) {
                      role = "Lieutenant General (LG)"
                    } else {
                      if (message.guild.member(user).roles.has(VCDF.id)) {
                        role = "Vice Chief of Defense (VCDF)"
                      } else {
                        if (message.guild.member(user).roles.has(CDF.id)) {
                          role = "Chief of Defense (VCDF)"
                        }
                      }
                    }
                  }
                }
              }
            }            }
          }
        }
      }
    }
  }
}            }
}
}
}
}
    //${member.user.username}
    const embed = new Discord.RichEmbed()
    .setTimestamp()
    .setColor(0xff0000)
    .setTitle("User Left")
    .setThumbnail(`${member.user.avatarURL}`)
    .setDescription(`\n`)
    .addField("Username:",`${member.user.username} (${member.user})`,true)
    .addField("Highest Role:",`${role}`,false)
  .setFooter(`User: ${member.user.username}`,`${member.user.avatarURL}`);
guild.channels.get(modlog.id).send({embed}).catch(console.error);
  };
  
};

/*
Major (MAJ)
Lieutenant Colonel (LTC)
Colonel (COL)

Brigadier/Major General (BG/MG)
Lieutenant-General (LG)

Vice Chief of Defence Force (VCDF)
Chief of Defense Force (CDF)*/
