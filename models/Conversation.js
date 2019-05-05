const connection = require('../connection')
const { Sequelize } = connection
const { Op } = Sequelize

const Conversation = connection.define('conversation', {

})

Conversation.findOrCreateConversation = function(user1Id, user2Id){
     return Conversation.findOrCreate({
         where: {
             user1Id: {
                 [Op.or]: [user1Id, user2Id]
             },
             user2Id: {
                [Op.or]: [user1Id, user2Id]
            }
         },
         include: [connection.models.message],
         order: [[connection.models.message, 'createdAt', 'DESC']]
     }).then(conversation => {
         if(conversation){
             return conversation
         }
         else{
             return Conversation.create({
                 user1Id: user1Id,
                 user2Id, user2Id
             },
             {
                 include: [connection.models.message],
                 order: [[connection.models.message, 'createdAt', 'DESC']]
             })
         }
     })
}

module.exports = Conversation