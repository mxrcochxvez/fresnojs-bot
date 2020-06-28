const { del } = require("../../functions.js");


module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (!message.guild) return;

    if (!message.content.startsWith(prefix) && !message.content.replace(/\D/g, "").startsWith(`${client.user.id}`)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message).catch(err => err);

    const args = message.content.startsWith(prefix) ? message.content.slice(prefix.length).trim().split(/ +/g) : message.content.replace(/[^\s]*/, "").trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) {
        del(message, 0);
        command.run(client, message, args);
    }
}