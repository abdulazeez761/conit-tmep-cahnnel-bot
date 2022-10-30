
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "Hide",
    aliases: ["hide", 'hided'],
    description: "Set the limit as the user in voice",
    usage: "Hide the channel",
    ownerOnly: false,
    myServerOnly: false,
    guildOnly: false,
    cooldown: 2,
    run: async (client, message, args) => {

        let channel = message.member.voice.channel;
        if (!channel) return message.channel.send({
            embed: {
                color: "RED",
                description: `Setting channel on your own channel`
            }

        })
        // here
        if (!message.member.permissionsIn(channel).has('MANAGE_CHANNELS'))
            return message.inlineReply('⚠ - The channel is owned');

        if (!message.guild.me.permissionsIn(channel).has('MANAGE_CHANNELS'))
            return message.inlineReply('⚠ - I dont have authority to manage');

        if (message.member.voice.channel) {

            let ika = new Discord.MessageEmbed()

                .setTitle("Channel Edited")
                .setDescription(`\`🔒\` Channel is not visibale`)
                .setFooter(`© MONEYPOWER 2021`)
                .setColor("GREEN")

            message.inlineReply(ika)
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
            for (const [memberID, member] of channel.members) {


                // message.member.voice.channel.setUserLimit(channel.members.size);


                channel.overwritePermissions([
                    {
                        id: channel.guild.roles.everyone,
                        deny: ['VIEW_CHANNEL'],
                    },
                    {
                        id: message.author.id,
                        allow: ['VIEW_CHANNEL', "MANAGE_CHANNELS", "CONNECT"],
                    }
                ]);
                // console.log(message.guild.roles.everyone.id)

            }
        }
    }
}
