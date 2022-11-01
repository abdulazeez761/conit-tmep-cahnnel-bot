const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "Invite",
    aliases: ["Inv", 'invited', 'invite'],
    description: "invite user to the channel",
    usage: "send invites users",
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
        let user = message.mentions.members.first()
        if (!message.member.permissionsIn(channel).has('MANAGE_CHANNELS'))
            return message.inlineReply('⚠ - The channel is owned');

        if (!message.guild.me.permissionsIn(channel).has('MANAGE_CHANNELS'))
            return message.inlineReply('⚠ - I dont have authority to manage');

        if (!user) return message.inlineReply("⚠ - Please mention user to transfer the overwrite permission")

        if (message.member.voice.channel) {
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id);


            channel.updateOverwrite(user.id, {
                //PERMISSION FOR CHANNEL AUTHOR
                STREAM: true,
                CONNECT: true,
                USE_VAD: true,
                MANAGE_CHANNELS: false,
                SPEAK: true,
                VIEW_CHANNEL: true
            }).then(async () => {
                let invite = await channel.createInvite()
                message.inlineReply(invite ? `\`✅\` Here's the voice invite for ${user} ${invite}` : 'There has been an error during the creation of the invite.')
            })

        }
    }
}

