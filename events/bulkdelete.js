const ms = require('ms');

module.exports =  {
name: "purge",
description: 'remove messages',
userPermissions: ['MANAGE_MESSAGES'],

  run: async (client, interaction) => {
    
      // check numbers 1-50 as valid entry to be deleted
    //   if(!count && isNaN(count) && (count >= 1 && count <=50)){
    // return message.channel.send('provide a valid count to be deleted 1- 50')
    //   }

  const messages = await interaction.channel.messages.fetch({
    limit: count + 1,
  });
  
 
    const filtered = messages.filter( msg => Date.now() - ms.createdTimestamp < ms('14 days'));

  await interaction.channel.bulkDelete(filtered)

  interaction.channel.send({content: `Deleted ${filtered.size-1} messages`}).then(msg =>{
    setTimeout(() => msg.delete(), ms('5 seconds'))
  });

            


}

}

 
