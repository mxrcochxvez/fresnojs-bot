const { Message } = require('discord.js'); // eslint-disable-line

module.exports = {
	name: 'important',
	description: 'Posts an important message.',

	/**
     * @param { Message } message
     * @param {*} args
     */

	run: async (client, message, args) => {
		if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
			message.channel.send(`${message.author}, you don't have permission to use this command.`);
			console.log(message);
		} else {
			let title, desc, author, contents;
			if(args[0] === undefined) {
				message.author.send('You must at least include 2 values with this command');
			} else if(args[1] === undefined) {
				message.author.send('I need one more value to work.');
			}
			title = args[0];
			desc = args[1];
			author = message.author.username;
			console.log(contents);
			message.channel.send({
				embed: {
					color: 0x990000,
					title: title,
					thumbnail: {
						url: message.author.avatarURL()
					},
					fields: [
						{
							name: `${desc}`,
							value: `${author}'s Message`
						}
					]
				}
			});
		}
	}
};