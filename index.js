const connection = require('./dbchat').connection;
const { Op } = connection.Sequelize;
const { User, Conversation, Message } = require('./dbchat').models;

//Creating tables on database chatdb
connection.sync({ force: true });