module.exports = {
    name: "kiss",
    category: "fun",
    description: "kisses your favorite person",
    run: async (client, message, args) => {
        message.channel.send(`${message.author} just lightly punched ${args[0]} with their lips`);
    }
}