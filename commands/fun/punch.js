module.exports = {
    name: "punch",
    category: "fun",
    description: "Punches your favorite person",
    run: async (client, message, args) => {
        message.channel.send(`${message.author} just sucker punched ${args[0]}`);
    }
}