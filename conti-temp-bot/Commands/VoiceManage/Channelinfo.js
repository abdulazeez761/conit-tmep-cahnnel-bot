const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "Channelinfo",
  aliases: ["channelinfo", "ci", "channel"],
  description: "Channel information",
  usage: "Channel",
  ownerOnly: false,
  myServerOnly: false,
  guildOnly: false,
  cooldown: 2,
  run: async (client, message, args) => {

    message.content.toLowerCase()
    let nsfwV = message.channel.nsfw ? 'nsfw' : 'not nsfw';
    let today = new Date().toISOString().slice(0, 10)
    let channel = message.member.voice.channel || message.channel || message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
    if (!channel) return message.inlineReply("Please mention a Channel or ID");

    let channelembed = new MessageEmbed()
      .setTitle(`Channel Information`)
      .setThumbnail(message.guild.iconURL())
      .addField("`🟢` Overview", `
└| Channel name is \`${channel.name}\`
└| Channel is ${nsfwV}
└| Channel type is ${channel.type}
└| Channel limit is ${channel.userLimit || 'no limit requiring'}
└| Channel member count is ${channel.members.size} user(s)
└| Channel bitrate is ${channel.bitrate + 'Kbps' || 'no bitrate requiring'}
└| Channel description is ${channel.topic || 'no description'}
└| Channel id is ${channel.id}
            `)
      .setTimestamp()

      .setColor(message.guild.me.displayHexColor)
    message.channel.send(channelembed);


  }
}
