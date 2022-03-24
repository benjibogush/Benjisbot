


module.exports = (client) => {

    
   client.on('messageCreate', (message) => {
        if(message.content.toLowerCase().includes('fudge') || message.content.toLowerCase().includes('pudding')){
            message.channel.send('Such language is prohibited!');
            message.delete();
        }
    });


  
}

