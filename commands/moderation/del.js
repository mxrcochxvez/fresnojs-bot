module.exports = {
    name: 'delete',
    description: 'Deletes messages from chat.',
    run: async (client, message, args) => {
        console.log("activated");
        if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
            message.channel.send(`${message.author}, you don't have permission to use this command.`);
            console.log(message);
        } else {
            try {
                const total = args[0];
                let messages;

                if(!total || isNaN(total) || total <= 0) {
                    message.reply("Please provide a value!");
                } else if(!isNaN(total) && total > 0) {
                    await message.delete();
                    messages = await message.channel.messages.fetch({ limit: total });
                    await message.channel.bulkDelete(messages);
                }
            } catch(err) {
                if(err.code === 50034) {
                    message.reply("You can only delete messages that are younger then 14 days");
                }
                console.error(err);
            }
        }
    }
};