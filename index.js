const token = require("./config.js")

const { ForgeClient } = require("forgescript")
const { ForgeDB } = require("forgedb")

// Client initialization

const client = new ForgeClient({

  "intents": [
        "Guilds",
        "GuildMembers",
        "GuildModeration",
        "GuildPresences",
        "GuildMessages",
        "GuildMessageReactions",
        "DirectMessages",
        "DirectMessageReactions",
        "MessageContent"
    ],
  "events": [
        "guildCreate",
        "messageCreate",
        "ready",
        "shardDisconnect",
        "shardError",
        "shardReady",
        "shardReconnecting",
        "shardResume"
    ],
  "extensions": [
        new ForgeDB()
    ]
})

// Commands loaders.

client.commands.load("./commands")
client.applicationCommands.load("./slashes")

// Log into the client.

client.login(token);
