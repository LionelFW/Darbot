const Darbot = require('./darbot')
const config = require('./config');
const fs = require('fs');
const botConfig = require('./botConfig');
const Discord = require('discord.js');
const client = new Darbot();
const prefix = config.prefix;

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
    const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);

	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	try {
		command.execute(message, client);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
});


client.login(config.token);