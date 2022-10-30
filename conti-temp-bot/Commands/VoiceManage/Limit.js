const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'Limit',
	description: 'Update the limit of your own channel',
	aliases: ['limit'],
	usage: `limit <num>`,
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
                            description: `**Usage**: limit <number>`
                        }  
        
                   })    
        
  if (message.member.voice.channel) {
  
  let limit = args.join(' ') || isNaN(args).number
  let ika = new MessageEmbed()
  
  .setTitle("Channel Edited")
  .setDescription(`Channel Limit edited by **${message.author.username}** into **${limit}**`)
  .setFooter(`© MONEYPOWER 2021`)
  .setColor("GREEN")
  
  message.inlineReply(ika)     
  let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
  for (const [memberID, member] of channel.members) {
    message.member.voice.channel.setUserLimit(limit);  
  }
} 
}
}
  
