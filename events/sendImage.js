const fs = require('fs')

module.exports = (client) => {

// function getPath(path) {
//      // const path ='./public/img/tech/'
//     const files = fs.readdirSync(path)
//     const randomIndex = Math.floor(Math.random() * files.length)
//     const file = files[randomIndex]
//   return file;
// } 

client.on('messageCreate', (message) => {
    const path ='./public/img/tech/'
  const pathAnimal = './public/img/animal/'
    
    const files = fs.readdirSync(path)
    const randomIndex = Math.floor(Math.random() * files.length)
    const file = files[randomIndex]

  if(message.content.toLowerCase().includes('tech')){
     message.channel.send({ files:[{attachment: path+file}] })
  }

    
   
})
          

    

    
  }

