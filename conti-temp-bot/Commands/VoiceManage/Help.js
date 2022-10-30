const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'Channelinfo',
  description: 'Information about specify channel',
  aliases: ['help', "h"],
  usage: `Channelinfo <channel/id/name>`,
  cooldown: 5,
  run: async (client, message, args) => {

    let embed = new MessageEmbed()
      .setAuthor(client.user.username)
      .setDescription("Commands State\nIf you want to get information about our commands, you can try to find with `Help_Cmdname`. For example `Help Limit`.")
      .addField("`🔒` Voice Manager", "`Help` `Bitrate`, `Name`, `Channelinfo`, `Transfer`, `Limit`, `Blacklist`, `Whitelist`, `Lock`, `unLock`, `Voice` ,`hide`, `unhide`")
      .setColor("PURPLE")
      .setTimestamp()
    message.inlineReply(embed)

  }
}

