module.exports = {
    del: async function (message, timeout) {
        if (message) { //Fix in case bad message
            if (message.id) { //Fix cannot read ID 
                if (message.deletable) {
                    setTimeout(function () {
                        if (!message.reactions.cache.get('🛑')) {  //messages can now stop from being deleted
                            message.delete({ timeout: 0 }).catch(err => err) //This gets rid of the annoying "Unknown Message" error.
                        }
                    }, timeout);
                }
            } else return;
        } else return;
    },
}