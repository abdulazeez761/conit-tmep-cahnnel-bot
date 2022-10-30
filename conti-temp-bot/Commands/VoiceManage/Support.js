const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'Support',
	description: 'List all of my commands or info about a specific command.',
  guildOnly: false,
  myServerOnly: false,
	aliases: ['support'],
	usage: `help <command_name>`,
	cooldown: 5,
	run: async (client, message, args) => {
     let helpEmbed1 = new MessageEmbed()

		.setAuthor(client.user.username)
    .setDescription("Theres problem? contact us")
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter("Support by Fan#7108")
    .addFields(
                
                {
                    name: "SUPPORT SERVER",
                    value: "**DISCORD.GG/MONEYPOWER**",
                    inline: false
                }
           
    )
    .setColor("BLACK")
    .setFooter(`${client.user.username} Created by Fan#7108 with Logic`)
    message.inlineReply(helpEmbed1)
    }
  }
