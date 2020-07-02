module.exports = {
    name: "unmute",
    category: "moderation",
    description: "Unmutes once annoying people",
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
                    message.author.send(`You cannot unmute ${member}, it is likely they have special permissions.`);
                } else {
                    // This is the part that is not working.
                    member.roles.remove(role);
                    message.author.send(`You have unmuted ${args[0]}, you can mute them again using the $mute <user> command.`);
                }
            } else {
                message.author.send("Member not found. Try including the @ symbol followed by their username.");
            }
        }
    }
}