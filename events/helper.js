module.exports = (client) => {
client.on('messageCreate', (message) => {
    if(message.content.toLowerCase().includes('hey bot') || message.content.toLowerCase().includes('help')){
        message.channel.send(`Hello there! Want to contact {@benji --admin}`);
    }
});

}