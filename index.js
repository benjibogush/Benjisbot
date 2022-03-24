const express = require('express');

const app = express();
const port = 4444;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at https://Benjisbot.benjibogush.repl.co:${port}`));

const { Client, Intents } = require('discord.js');


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_INVITES] });


// const { Client, Intents } = require('discord.js');
// const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


// When the client is ready, run this code (only once)
client.once('ready', (it) => {
	console.log(it.user.tag, ' is ready!');

});

client.on('messageCreate', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong!');
  }
  if(msg.content === 'beep'){
    msg.reply('boop!')
  }
  if(msg.content === 'is here'){
    // msg.reply('Welcome to life boat!');
    msg.reply(`Hey  ${msg.author}, welcome to life boat! Thanks for joining.`)
  }
});

client.on("messageDelete", function(message){
    console.log(`message is deleted -> ${message}`);
});

client.on("messageDeleteBulk", function(messages){
    console.log(`messages are deleted -> ${messages}`);
});

client.on('messageCreate', (message) => {
    if(message.content.toLowerCase().includes('hey bot') || message.content.toLowerCase().includes('help')){
        message.channel.send('Hello there! Want to contact `@benji --admin`');
    }
});

const event = require(`./events/deleteCommand.js`);
event(client)

client.on("typingStart", function(channel, user){
    console.log(`${user.tag} has started typing`);
});

client.on("messageDeleteBulk", (msg, text) => {
  msg.delete(text);
    
});


client.on("error", function(error){
    console.error(`client's WebSocket encountered a connection error: ${error}`);
});

// Login to Discord with your client's token
client.login(process.env.token);