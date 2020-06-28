module.exports = {
    name: "eat",
    category: "fun",
    description: "eats your favorite person",
    run: async (client, message, args) => {
        message.channel.send(`${message.author} opened their mouth and ${args[0]} was soon consumed by darkness`);
    }
}