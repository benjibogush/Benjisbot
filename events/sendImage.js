const fs = require('fs')

module.exports = (client) => {



    // function sendMessage(key, path, fileIndex) {
    //  if(message.content.toLowerCase().includes(key)){
    //      message.channel.send({ files:[{attachment: path+file}] })
    //  }
    // } 

    client.on('messageCreate', (message) => {
      const path = './public/img/tech/'
      const pathAnimal = './public/img/animal/'

      const files = fs.readdirSync(path)
      const randomIndex = Math.floor(Math.random() * files.length)
      const file = files[randomIndex]

      if (message.content.toLowerCase() === ('tech')) {
        message.channel.send({ files: [{ attachment: path + file }] })
      }

      // let key = message.content.toLowerCase()
      // sendMessage(key, path, file)


    })





  }

