import * as Discord from "discord.js";

import { client, started } from "../main.js";

client.on("ready", function() {
    client.user?.setPresence({
        activities: [
            {
                name: "Hello World!",
                type: Discord.ActivityType.Playing
            }
        ],
        status: "online" // online, idle, invisible, dnd
    });

    client.user?.setStatus("dnd"); // sometimes the first set wont work

    console.log(`Logged in as ${client.user?.tag} after ${Date.now() - started}ms`);
});