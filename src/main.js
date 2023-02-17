import * as Discord from "discord.js";

import { config } from "dotenv";

export const started = Date.now();

export const client = new Discord.Client({
    intents: [
        Discord.IntentsBitField.Flags.Guilds,
        Discord.IntentsBitField.Flags.GuildMembers,
        Discord.IntentsBitField.Flags.GuildMessages,
        Discord.IntentsBitField.Flags.GuildMessageReactions,
        Discord.IntentsBitField.Flags.MessageContent,
    ],

    partials: [
        Discord.Partials.Message,
        Discord.Partials.Channel,
        Discord.Partials.Reaction,
    ]
});

config();

import("./utils/registerCommands.js");
import("./events/interactionCreate.js");
import("./events/ready.js");

client.login(process.env.TOKEN);