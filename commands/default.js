const prefix = process.env.PREFIX || (require('../settings.json')).prefix;

cmd = async (client, message) => {

    let embed = {
        color: 0xff0000,
        title: "what 7 u say?",
        description: `${message.author} 你好似打錯咗啲嘢喎，唔識用嘅話可以打 ${prefix} help 睇返 :innocent:`,
        image: {
            url: 'https://j.gifs.com/mqwxL0.gif'
        },
        timestamp: new Date()
    }

    message.channel.send({ embed: embed });
}


module.exports = {
    name: 'error',
    aliases: [],
    run: cmd
}