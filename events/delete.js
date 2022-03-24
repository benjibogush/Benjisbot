


module.exports = (client) => {
  

   client.on('messageCreate', (message) => {
        if(message.content.toLowerCase().includes('fudge') || message.content.toLowerCase().includes('pudding')){
            message.channel.send('Such language is prohibited!');
            message.delete();
          let data = fetchText();
        }
    });

client.on("messageDelete", function(message){
    console.log(`message is deleted -> ${message}`);
});

client.on("messageDeleteBulk", async messages => {
    //  msg.delete(text);
      const length = messages.array().length;
      const channel = messages.first().channel.name;

      const embed = new Discord.MessageEmbed()
          .setTitle(`${length} Messages purged in #${channel}`)
          .setDescription(messages.map(message =>         `[${message.author.tag}]: ${message.content}`))
          .setFooter(`${length} latest shown`)
          .setColor('#dd5f53')
          .setTimestamp();

    // use this to send the message to the channel the bulk delete     happened in 
  messages.first().channel.send(embed);
  // alternatively, use this to send the message to a specific channel
//  (await client.channels.fetch(/* channel ID */)).send(embed);
    
});

    
  
client.on("messageDeleteBulk", function(messages){
      console.log(`messages are deleted -> ${messages}`);
});

  



  // end of the function
}

