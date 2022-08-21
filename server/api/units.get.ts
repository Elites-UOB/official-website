import { Client, IntentsBitField, ClientEvents, REST } from "discord.js";
import { Routes, ChannelType } from 'discord-api-types/v10';

const token =
  "MTAxMDU4MjEzNTE2MzMzODkxMw.GlTTbw.hlFbL8apOVcgrSNCOqMcbTnRXbvy3MmVb1znYI";
function getRoles(robj) {
  let roles = [];

  robj.forEach((role) => {
    roles.push({
      name: role.name,
      color: role.hexColor,
    });
  });

  return roles;
}

function getMembers(mobj) {
  let members = [];

  mobj.forEach((user) => {
    members.push({
      userstatus: {
        color: user.displayHexColor,
        name: user.displayName,
      },
      user: {
        tag: user.user.tag,
        avatar: user.user.avatar,
      },
      roles: getRoles(user.roles.cache),
    });
  });

  return members;
}


export default defineEventHandler(async (event) => {
  // const myIntents = new IntentsBitField();
  // myIntents.add(
  //   IntentsBitField.Flags.GuildPresences,
  //   IntentsBitField.Flags.GuildMembers,
  //   IntentsBitField.Flags.Guilds
  // );

  // const client = new Client({ intents: myIntents });

  const rest = new REST({ version: '10' }).setToken(token);
  try {
    const channelsRawData =  Object.values(await rest.get(Routes.guildChannels("979453656665571349")));
    const urlParams = new URLSearchParams()
    urlParams.append("limit", "300")
    const guildMemebers =  Object.values(await rest.get(Routes.guildMembers("979453656665571349"), {
      query: urlParams
    }));

    // Getting groups (categories)
    let categories = []
    categories = channelsRawData.filter(channel => channel.type == 4 && channel.name.includes('Unit') && !channel.name.includes('Unknown'))

    let permissions = [
      // Alkhwarizmi
      {id: "1008158087259115560", name: 'Leader', category: 'Alkhwarizmi Unit'},
      {id: "1008267142216564757", name: 'member', category: 'Alkhwarizmi Unit'},

      // Pythagoras
      {id: "1008265655344173137", name: 'Leader', category: 'Pythagoras Unit'},
      {id: "1008266384003825735", name: 'member', category: 'Pythagoras Unit'},

      // Tesla
      {id: "1008159710278598778", name: 'Leader', category: 'Tesla Unit'},
      {id: "1008267055969087598", name: 'member', category: 'Tesla Unit'},

      // DaVinci
      {id: "1008265283015802931", name: 'Leader', category: 'DaVinci Unit'},
      {id: "1008266944325111819", name: 'member', category: 'DaVinci Unit'},
    ]

    // Setting channels to it's categories
    // channelsRawData.forEach(channel => {
    //   if (channel.parent_id){
    //     let myCategory = categories.find(category => category.id == channel.parent_id)
    //     if (!myCategory.channels) myCategory.channels = []
    //     if (myCategory) myCategory.channels.push(channel)
    //   }
    // })

    // Setting members to it's categories
    guildMemebers.forEach(async member => {
      let myPermissions = member.roles
      let myUnits = []
      myPermissions.forEach(permission => {
        let _permission = permissions.find(perm => perm.id == permission)
        if (_permission) {
          let myCategory = categories.find(category => category.name == _permission.category)
          if (!myCategory.members) myCategory.members = []
          myCategory.members.push({
            title: _permission.name,
            ...member
          })
        }
      })

      member.unit = myUnits
    })

    
    return {
      units: categories,
      // memebers: guildMemebers
    }
  } catch (error) {
      // console.error(error);
      return {
        data: null
      }
  }


  
});
