module.exports = {
    name: "mute",
    category: "moderation",
    description: "Mutes annoying people",
    run: async (client, message, args) => {
        console.log("activated");
        if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
            message.channel.send(`${message.author}, you don't have permission to use this command.`);
        } else {
            let role = message.guild.roles.cache.find(r => r.name == 'Mute');
            let member = message.mentions.members.first();
            let memberId = member ? message.guild.members.cache.get(member.id) : undefined;
            let can_manage_chans = member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']);
            console.log(can_manage_chans);
            console.log(memberId);
            if(memberId != undefined) {
                if(can_manage_chans) {
                    message.author.send(`You cannot mute ${member}, it is likely they have special permissions.`);
                } else {
                    // This is the part that is not working.
                    member.roles.add(role);
                    message.author.send(`You have muted ${args[0]}, you can unmute them using the $unmute <user> command.`)
                }
            } else {
                message.author.send("Member not found. Try including the @ symbol followed by their username.");
            }
        }
    }
}