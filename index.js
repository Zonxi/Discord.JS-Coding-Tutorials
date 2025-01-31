const { Collection, Client } = require('discord.js');
const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
});
module.exports = client;

// Mongo Connection
const { mongooseConnectionString } = require("./config.json");
const mongoose = require("mongoose");
mongoose.connect(mongooseConnectionString, {
    useFindAndModify: true,
    useUnifiedTopology: true,
}).then(console.log('Connected to mongodb!'))

client.commands = new Collection()
client.config = require('./config.json')
client.prefix = client.config.prefix
client.aliases = new Collection()

require('./handler')(client);

client.login(client.config.token)

