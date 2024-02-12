const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('users_db', 'postgres', '031004', {
host: 'localhost',
port: 5432,
dialect: 'postgres'
});


    sequelize.authenticate().then(()=> {
        console.log(`База данных подключена`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

    db.users = require('./userModel') (sequelize, DataTypes)

    module.exports = db