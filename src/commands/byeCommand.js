import * as Discord from "discord.js";

export function handleCommand(interaction) {
    const embed = new Discord.EmbedBuilder()
            .setColor(10038562)
            .setTitle("Bye :)")
            .setDescription("Description");

    interaction.reply({ content: "Bye", embeds: [embed] });
}