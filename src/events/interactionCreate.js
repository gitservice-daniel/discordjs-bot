import * as Discord from "discord.js";

import { client } from "../main.js";

import { handleCommand as handleByeCommand } from "../commands/byeCommand.js";
import { handleCommand as handleHelloCommand } from "../commands/helloCommand.js";

client.on("interactionCreate", function(interaction) {
    if (!interaction.isChatInputCommand()) return;

    console.log("Received Event: INTERACTION_CREATE/" + interaction.commandName);

    // you can also this modular, but i use here a simple switch case
    switch (interaction.commandName) {
        case "hello":
            handleHelloCommand(interaction);
            break;
        case "bye":
            handleByeCommand(interaction);
            break;
        default:
            // huch, unknown command
            break;
    }
});