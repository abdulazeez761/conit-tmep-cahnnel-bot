
const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "Whitelist",
  aliases: ["whitelist", "wl", 'unband', "unban"],
  description: "Whitelisting user from voice channel",
  usage: "Whitelist <user>",
  ownerOnly: false,
  myServerOnly: false,
  guildOnly: false,
  cooldown: 5,
  run: async (client, message, args) => {

    let channel = message.member.voice.channel;
    if (!channel) return message.channel.send({
      embed: {
        color: "RED",
        description: `Setting channel on your own channel`
      }
    })
    if (!message.member.permissionsIn(channel).has('MANAGE_CHANNELS'))
      return message.inlineReply('⚠ - The channel is owned');

    if (!message.guild.me.permissionsIn(channel).has('MANAGE_CHANNELS'))
      return message.inlineReply('⚠ - I dont have authority to manage');



    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.user.id.toLowerCase() === args.join(' ').toLocaleLowerCase())

    let doing = new MessageEmbed()
      .setAuthor("Whitelist Voice", "https://cdn.discordapp.com/emojis/870629127525392424.png?v=1")
      .addField("How to do?", `\`\`\`js
mp!whitelist <mention> | <id> | <username>
\`\`\``)
      .setFooter("White Statement")
      .setColor('GREEN')
    if (!user) return message.inlineReply(doing)


    channel.updateOverwrite(user, {
      CONNECT: true
    })


    let ngentot = new Discord.MessageEmbed()
      .setTitle("Permission Update")
      .setDescription(`\`🔨\` Now ${user} can join [\`${channel.name}\`] by **${message.author.username}**. Yuhuu`)
      .setFooter(`© MONEYPOWER 2021`)
      .setColor("WHITE")
    message.inlineReply(ngentot)


  }
}
//else {
  // if (channel.name !== name) return message.inlineReply("I dont control that channel anymore because the owner of the channel make a miss")
