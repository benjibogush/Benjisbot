const express = require('express');

const app = express();
const port = 4444;

app.get('/', (req, res) => res.send("Join 7 to 77+ Software Engineer's Discord Server: https://discord.gg/2FZE72sT3P"));

app.listen(port, () => console.log(`Benjis bot is listening at https://Benjisbot.benjibogush.repl.co:${port}`));

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_INVITES] });

// When the client is ready, run this code (only once)
const redi = require(`./events/ready.js`)
redi.ready(client)

// responds to 'hey bot' and 'help' inside channels
const help = require(`./events/helper.js`)
help(client)

// responds and deletes prohibited words
const event = require(`./events/deleteCommand.js`);
event(client)

// responds inside the console in the event of errors
const error = require(`./events/error.js`);
error(client)


// Login to Discord with your client's token
client.login(process.env.token);