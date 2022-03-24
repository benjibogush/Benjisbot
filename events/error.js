
module.exports = (client) => {

client.on("error", function(error){
    console.error(`client's WebSocket encountered a connection error: ${error}`);
});
  
client.on("reconnecting", function(){
    console.log(`client tries to reconnect to the WebSocket`);
});

}


// export function err(client){
// client.on("error", function(error){
//     console.error(`client's WebSocket encountered a connection error: ${error}`);
// });
  
// client.on("reconnecting", function(){
//     console.log(`client tries to reconnect to the WebSocket`);
// });
  
// }