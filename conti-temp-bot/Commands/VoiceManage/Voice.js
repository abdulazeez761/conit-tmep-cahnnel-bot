
const Discord = require("discord.js");

module.exports = {
  name: "Voice",
  aliases: ["voice", "voicesearch", "vc"],
  description: "To get invite to join user voice channel",
  usage: "Voice <mention>",
  ownerOnly: false,
  myServerOnly: false,
  guildOnly: false,
  cooldown: 2,
  run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.user.id.toLowerCase() === args.join(' ').toLocaleLowerCase())

    if (!user) return message.inlineReply("⚠ - Please mention user to get voice invite")

    if (user.voice.channelID === null || user.voice.channelID === undefined) return message.inlineReply(`⚠ - That person is not on any voice Channel`);
    // if(user === !message.member.voice.channel) return message.inlineReply("This user is not in any voice channel right now")

    let invite = await user.voice.channel.createInvite()

    message.inlineReply(invite ? `\`✅\` Here's the voice invite of that user ${invite}` : 'There has been an error during the creation of the invite.')
  }
}
