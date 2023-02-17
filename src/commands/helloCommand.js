import * as Discord from "discord.js";

export function handleCommand(interaction) {
    const embed = new Discord.EmbedBuilder()
            .setColor(10038562)
            .setTitle("Hello :)")
            .setDescription("Description");

    interaction.reply({ content: "Hello", embeds: [embed] });
}