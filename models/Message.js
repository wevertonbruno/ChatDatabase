const connection = require('../connection')
const { Sequelize } = connection

const Message = connection.define('message', {
    text: {
        type: Sequelize.STRING
    },
    user: {
        type: Sequelize.JSON
    },
    _id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    }
})

Message.createMessage = function(textContent, userSender, userReceiver){
    return Promise.all([
        Message.createMessage({
            text: textContent,
            user: {
                _id: userSender.id,
                name: userSender.name
            }
        }),
        connection.models.conversation.findOrCreateConversation(userSender.id, userReceiver.id)
    ])
    .then(([message, conversation]) => message.setConversation(conversation))
}

module.exports = Message