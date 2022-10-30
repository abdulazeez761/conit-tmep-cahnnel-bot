const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
  name: "Bitrate",
  aliases: ["bitrate","rate"],
  description: "Update channel bitrate",
  usage: "Bitrate <num>",
  ownerOnly: false,
  myServerOnly: false,
  guildOnly: false,
  cooldown: 3,
	run: async (client, message, args) => {

let channel = message.member.voice.channel; 
if (!channel)return message.channel.send({
                        embed: {
                            color: "RED",
                            description :`Setting channel on your own channel`
                        }
   
                   })
if (!message.member.permissionsIn(channel).has('MANAGE_CHANNELS'))
  return message.inlineReply('⚠ - The channel is owned');

if (!message.guild.me.permissionsIn(channel).has('MANAGE_CHANNELS'))
  return message.inlineReply('⚠ - I dont have authority to manage'); 
 
       
    
    if (!args.length || isNaN(args[0]))
      return message.channel.send({
                        embed: {
                            color: "RED",
                            description: `**Usage**: bitrate <number>`
                        }  
        
                   })    
       
  if (message.member.voice.channel) {
  
  let bitrate = args.join(' ') || isNaN(args).number
  if(bitrate < 8) return message.inlineReply("⚠ - You cant set bitrate under 8Kbps, because the lower is 8Kbps")
  if(bitrate > 384) return message.inlineReply("⚠ - You cant set bitrate higher 384Kbps, because the bitrate limit is 384Kbps")
  let ika = new Discord.MessageEmbed()
  
  .setTitle("Channel Edited")
  .setDescription(`\`🔨\` Channel Bitrate edited by **${message.author.username}** into **${bitrate}**`)
  .setFooter(`© MONEYPOWER 2021`)
  .setColor("GREEN")
  
  message.inlineReply(ika)
  let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
  for (const [memberID, member] of channel.members) {
    
    
    message.member.voice.channel.setBitrate(bitrate+"000");  
  }
} 
}
}
  
