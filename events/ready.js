const greet = ['good to see you', 'just slid into the server', "glad you're here", 'is here', 'welcome']


const ready = (client) => {
  client.once('ready', (it) => {
    console.log(it.user.tag, ' is ready!');
    console.log(`I am ready! Logged in as   ${client.user.tag}!`);
    console.log(`Bot has started, with ${client.users.size} users, 
                      in ${client.channels.size} channels of                                          ${client.guilds.size} guilds.`);

    client.user.setActivity("kaboom");
  });

  client.on('messageCreate', msg => {
    if (msg.content === 'ping') {
      msg.reply('pong!');
    }
    if (msg.content === 'beep') {
      msg.reply('boop!')
    }

    if (greet.includes(msg.content.toLowerCase())) {
      msg.channel.send(`Hey  ${msg.author}, welcome to life boat! Thanks for joining.`)
    }


    // if(msg.content === 'is here'){
    //   // msg.reply('Welcome to life boat!');
    //   msg.reply(`Hey  ${msg.author}, welcome to life boat! Thanks for joining.`)
    // }
  });


};

exports.ready = ready;


