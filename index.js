const { Client, Collection } = require('discord.js');
const { config } = require('dotenv');
const client = new Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

config({path: __dirname + "/.env"})
global.prefix = "!";

["aliases", "commands"].forEach(x => client[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(client))

client.login(process.env.TOKEN);