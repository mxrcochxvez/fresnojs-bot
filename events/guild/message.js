const { del } = require("../../functions.js");


module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (!message.guild) return;

    if (!message.content.startsWith(prefix) && !message.content.replace(/\D/g, "").startsWith(`${client.user.id}`)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message).catch(err => err);

    const newMessage = message.content.slice(prefix.length).trim();
	const myRegexp = /[^\s"]+|"([^"]*)"/gi;
	const myArray = [];

	do {
		//Each call to exec returns the next regex match as an array
		var match = myRegexp.exec(newMessage);
		if (match != null) {
			//Index 1 in the array is the captured group if it exists
			//Index 0 is the matched text, which we use if no captured group exists
			myArray.push(match[1] ? match[1] : match[0]);
		}
	} while (match != null);

    const args = myArray;
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) {
        del(message, 0);
        command.run(client, message, args);
    }
}