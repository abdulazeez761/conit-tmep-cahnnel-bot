const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "Owner",
  aliases: ["transfer", "trans", "trf", "Owner"],
  description: "Transfer your channel to user mention",
  usage: "Transfer or trans or trf or Owner <mention>",
  ownerOnly: false,
  myServerOnly: false,
  guildOnly: false,
  cooldown: 2,
  run: async (client, message, args) => {

    // try{

    // } catch(err){
    //   console.log(err)
    // }
    let channel = message.member.voice.channel;
    if (!channel) return message.channel.send({
      embed: {
        color: "RED",
        description: `Setting channel on your own channel`
      }

    })
    let user = message.mentions.members.first()
    if (!user) return message.inlineReply("⚠ - Please mention user to transfer the overwrite permission")

    if (!message.member.permissionsIn(channel).has('MANAGE_CHANNELS'))
      return message.inlineReply('⚠ - The channel is owned');

    if (!message.guild.me.permissionsIn(channel).has('MANAGE_CHANNELS'))
      return message.inlineReply('⚠ - I dont have authority to manage');


    // channel.permissionOverwrites.get(message.member.id).delete()
    // channel.updateOverwrite(message.member.id, {
    //   //PERMISSION FOR CHANNEL AUTHOR
    //   STREAM: true,
    //   CONNECT: true,
    //   USE_VAD: true,
    //   MANAGE_CHANNELS: false,
    //   SPEAK: true,
    // })

    // channel.updateOverwrite(user.id, {
    //   //PERMISSION FOR CHANNEL AUTHOR
    //   STREAM: true,
    //   CONNECT: true,
    //   USE_VAD: true,
    //   MANAGE_CHANNELS: true,
    //   SPEAK: true,
    //   MOVE_MEMBERS: true
    // })
    channel.overwritePermissions([
      {
        id: user.id,
        allow: ['VIEW_CHANNEL', "MOVE_MEMBERS", 'MANAGE_CHANNELS'],
      }
    ]);

    let ikan = new MessageEmbed()
      .setTitle("Authority Update")
      .addField("Transfer Rights", `
\`✅\` new Author : <@${user.id}>
\`x\` lsat Author : <@${message.member.id}>

  `)
      .setFooter(`© MONEYPOWER 2021`)
      .setColor("GREEN")
    return message.inlineReply(ikan)

  }
}
//previous owner

