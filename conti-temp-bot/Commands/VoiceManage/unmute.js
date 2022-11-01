const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "unMute",
    aliases: ["unmute", "unmu", 'speek'],
    description: "unmute a user",
    usage: "unmute <user>",
    ownerOnly: false,
    myServerOnly: false,
    guildOnly: false,
    // cooldown: 0,
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
            .setAuthor("mute Voice", "https://cdn.discordapp.com/emojis/870629127525392424.png?v=1")
            .addField("How to do?", `\`\`\`js
! mute <mention> | <id> | <username>
\`\`\``)

        let userIsNotInTheRome = new MessageEmbed()
            .setAuthor("mute Voice", "https://cdn.discordapp.com/emojis/870629127525392424.png?v=1")
            .addField("user is not in a chat rome", `\`\`\` user must be in the rome first
\`\`\``)
            .setFooter("mute Statement")
            .setColor('GREEN')
        let userIsNotInYourChannel = new MessageEmbed()
            .setAuthor("mute", "https://cdn.discordapp.com/emojis/870629127525392424.png?v=1")
            .addField("user is not in your chat rome", `\`\`\` user must be in your rome first
\`\`\``)
            .setFooter("mute Statement")
            .setColor('GREEN')

        if (!user) return message.inlineReply(doing);
        if (!user.voice.channel) return message.inlineReply(userIsNotInTheRome);
        if (message.member.voice.channel.id !== user.voice.channel.id) return message.inlineReply(userIsNotInYourChannel);

        // console.log(user.voice.channel.id)

        // if (user.voice && user.voice.channel.id == channel.id) {
        //     user.voice.setMute(true);
        //     data.romeID = channel.id
        //     data.userID = user.id
        //     data.muted = 'true'
        //     console.log(data)
        // }
        // await user.voice.setMute(true)

        channel.updateOverwrite(user.id, {
            //PERMISSION FOR CHANNEL AUTHOR
            SPEAK: true,
        })

        // channel.overwritePermissions([
        //     {
        //         id: channel.guild.roles.everyone,
        //         deny: ['CONNECT'],
        //     },
        //     {
        //         id: message.author.id,
        //         allow: ['VIEW_CHANNEL', "MANAGE_CHANNELS", "CONNECT"],
        //     }
        // ]);


    }
}