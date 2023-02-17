import * as Discord from 'discord.js';

const commands = [
    {
        name: 'hello',
        description: 'Says hello',
    },
    {
        name: 'bye',
        description: 'Says bye',
    }
];

// @ts-ignore
const rest = new Discord.REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands');
        await rest.put(
            // @ts-ignore
            Discord.Routes.applicationGuildCommands(process.env.CLIENTID, process.env.GUILDID),
            {
                body: commands,
            },
        );
        console.log('Slash commands registered...');
    } catch (error) {
        console.error(error);
    }
})();