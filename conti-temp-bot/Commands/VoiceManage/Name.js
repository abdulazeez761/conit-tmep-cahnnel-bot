const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'Name',
  description: 'Update the name of your own channel',
  aliases: ['name', 'rename', 'setname'],
  usage: `name <args>`,
  cooldown: 300,
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



    if (!args[0])
      return message.channel.send({
        embed: {
          color: "RED",
          description: `**Usage**: name <text>`
        }
      })

    if (message.member.voice.channel) {
      let name = args.join(' ')

      let ngentot = new MessageEmbed()
        .setTitle("Channel Edited")
        .setDescription(`Channel Name edited by **${message.author.username}** into **${name}**`)
        .setFooter(`© MONEYPOWER 2021`)
        .setColor("GREEN")
      message.inlineReply(ngentot)

      for (const [memberID, member] of channel.members) {
        message.member.voice.channel.setName(name);

      }
    }
  }
}
