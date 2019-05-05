# Chat Database
> MySQL Database project with nodejs and Sequelize to use in a chat app between two users. Inspired by [Grumbaut](https://github.com/grumbaut).

<br>
<hr>
<p align="center">
If you find this useful, please don't forget to star ⭐️ the repo, as this will help to promote the project.<br>
Follow me on <a href="https://twitter.com/oieusouweverton">Twitter</a> and <a href="https://github.com/wevertonbruno">GitHub</a> to keep updated about this project and <a href="https://github.com/wevertonbruno?tab=repositories">others</a>.
</p>
<hr>
<br>

## Features

 - **Ease to use** - All functions that you need to set up the database.
 - **Portable** - You can use with any database supported by Sequelize, only change some line of code.

## How to use

- Set up your dependencies on package.json. 
- Set up your configurations on config.js file.
- Run index.js to create tables in mysql server or whatever.
- Create a user by User.findOrCreate method (A sequelize method, be free to see in [Documentation](http://docs.sequelizejs.com/)).
- Create or get a conversation by Conversation.findOrCreateConversation(id1, id2) method.
- Create a message by Message.createMessage(text, sender, receiver) method. 
- Take a look in [source-code](https://github.com/wevertonbruno/ChatDatabase/tree/master/models) of models!

 
## Credits

- [Grumbaut](https://github.com/grumbaut)

## License

UNIVASF © [Weverton Bruno](https://github.com/wevertonbruno)
