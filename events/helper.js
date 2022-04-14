module.exports = (client) => {
  const cases = ['bot', 'hello', 'hi', 'help', 'assistance']
  const questions = ['invite link', 'invitation', 'register', 'join', 'link', 'share link', 'send link', 'join discord', 'share with friends']
  const udemy = ['udemy','udemy link', 'course link', 'java course link']


  
client.on('messageCreate', (message) => {
    // if(message.content.toLowerCase().includes('hey bot') || message.content.toLowerCase().includes('help')){
    //     message.channel.send("Hello there! Want to contact `@benji --admin`");
    // }
    if(cases.includes(message.content.toLowerCase())){
      message.channel.send("What seems to be bothering you? Can I help you?");
    }

    if(questions.includes(message.content.toLowerCase())){
      message.channel.send("Here you go: `https://discord.gg/2FZE72sT3P`")
    }

   if(udemy.includes(message.content.toLowerCase())){
      message.channel.send("Here you go: `https://www.udemy.com/course/technical-java-interview-prep-for-it-professionals/`")
    }
    
});

}