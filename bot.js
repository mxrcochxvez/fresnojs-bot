const { Client, Collection } = require('discord.js');
const { config } = require('dotenv');
const client = new Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

config({path: __dirname + "/.env"})
global.prefix = "!";

client.login(process.env.TOKEN);