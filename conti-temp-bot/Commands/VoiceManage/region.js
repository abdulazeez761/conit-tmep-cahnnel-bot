const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')
const { ActionRowBuilder, Events, SelectMenuBuilder, MessageSelectMenu } = require('discord.js');

module.exports = {
    name: "Region",
    aliases: ["region", "re", 'setRegion'],
    description: "change the rome region",
    usage: "region <region name>",
    ownerOnly: false,
    myServerOnly: false,
    guildOnly: false,
    cooldown: 1,
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
        let chooseRegion = new MessageEmbed()

            .setAuthor("change the region", "https://cdn.discordapp.com/emojis/870629127525392424.png?v=1")
            .addField("How to do?", `\`\`\`js
! region <'brazil', 'hongkong', 'india', 'japan', 'rotterdam', 'russia', 'singapore', 'south-korea', 'southafrica', 'sydney', 'us-central', 'us-east', 'us-south', 'us-west'
> 
\`\`\``)

        // let makeSure = new MessageEmbed()
        //     .setAuthor("change the region", "https://cdn.discordapp.com/emojis/870629127525392424.png?v=1")
        //     .addField(`make sure that you are using a valid name that's what you wrot ${args}`)


        const succsess = new MessageEmbed()
            .setAuthor("change the region", "https://cdn.discordapp.com/emojis/870629127525392424.png?v=1")
            .addField("done", `\`\`\`region now is "${args}"\`\`\``)

        const regions = ['brazil', 'hongkong', 'india', 'japan', 'rotterdam', 'russia', 'singapore', 'south-korea', 'southafrica', 'sydney', 'us-central', 'us-east', 'us-south', 'us-west']
        if (args.length === 0) return message.inlineReply(chooseRegion)
        const chosedRegion = args.shift().toLowerCase()

        for (let i = 0; i < regions.length; i++) {
            if (regions[i] == chosedRegion) {
                await client.api.channels(channel.id).get().then(async (res) => {
                    await client.api.channels(channel.id).put({
                        data: {
                            name: res.name,
                            rtc_region: chosedRegion,
                            type: res.type,
                            position: res.position,
                            parent_id: res.parent_id
                        }
                    }).then((res) => {
                        return message.inlineReply(succsess)
                    })
                })
                return
            }

        }

    }
}

