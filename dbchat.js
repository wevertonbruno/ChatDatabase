const connection = require('./connection')
const Conversation = require('./models/Conversation')
const Message = require('./models/Message')
const User = require('./models/User')

/* Setting association
 - Users will be able to carry on many conversations.
 - Each conversation will need to belong to two users.
 - A message will belong to a single conversation, but a conversation will have many messages. 
 */

 User.hasMany(Conversation)
 Conversation.belongsTo(User, { as: 'user1'})
 Conversation.belongsTo(User, { as: 'user2'})
 Message.belongsTo(Conversation)
 Conversation.hasMany(Message)

 module.exports = {
     connection,
     models:{
         Conversation,
         User,
         Message
     }
 }