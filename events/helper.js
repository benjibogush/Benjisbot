module.exports = async (client) => {
  const cases = ['bot', 'hello', 'hi', 'help', 'assistance']
  const questions = ['invite link', 'invitation', 'register', 'join', 'link', 'share link', 'send link', 'join discord', 'share with friends', 'discord link']
  const udemy = ['udemy', 'udemy link', 'course link', 'java course link']



 await client.on ('messageCreate', (message)  =>  {
    // if(message.content.toLowerCase().includes('hey bot') || message.content.toLowerCase().includes('help')){
    //     message.channel.send("Hello there! Want to contact `@benji --admin`");
    // }
    if (cases.includes(message.content.toLowerCase())) {
      message.channel.send("What seems to be bothering you? Can I help you?");
    }

    if (questions.includes(message.content.toLowerCase())) {
       message.channel.send("Here you go:\n")
      message.channel.send(`https://discord.gg/2FZE72sT3P`)
    }

    if (udemy.includes(message.content.toLowerCase())) {
      message.channel.send('here you go: \n')
      message.channel.send(`https://www.udemy.com/course/technical-java-interview-prep-for-it-professionals/?referralCode=52FF1762CE17827E3DF5 `)
    }

    if (message.content.toLowerCase() === 'coupon') {
      for (let i = 1; i > 0; i--) {
        message.channel.send("HAPPYMOTHERSDAY")
      }
    }

    if(message.content.toLowerCase() === 'me'){
          // client.users.cache.find(user => message.channel.send(user.username) ) returns bot ?
      client.users.fetch(user => message.channel.send(user) ).then(console.log)
    .catch(console.error);
      
    }

  })

}