const express = require('express');
const app = express();
const port = 4444;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at https://Benjisbot.benjibogush.repl.co:${port}`));

const { Client, Intents } = require('discord.js');


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// const { Client, Intents } = require('discord.js');
// const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


// When the client is ready, run this code (only once)
client.once('ready', (it) => {
	console.log(it.user.tag, ' is ready!');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong!');
  }
  if(msg.content === 'beep'){
    msg.reply('boop!')
  }
  if(msg.content === 'is here.'){
    // msg.reply('Welcome to life boat!');
    msg.reply(`Hey  ${msg.author}, welcome to life boat! Thanks for joining.`)
  }
});



// Login to Discord with your client's token
client.login(process.env.token);