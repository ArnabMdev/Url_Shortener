//importing modules
const {Sequelize, DataTypes} = require('sequelize')
const dotenv = require('dotenv').config()

//Database connection with dialect of postgres specifying the database we are using
//port for my database is 5433
//database name is discover
const sequelize = new Sequelize('url_shortener','postgres','#Arnab15#', {dialect: "postgres"});

//checking if connection is done
    sequelize.authenticate().then(() => {
        console.log(`Database connected to url_shortener_db`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to model
db.users = require('./userModel') (sequelize, DataTypes)
db.urls = require('./urlModel') (sequelize, DataTypes)

//exporting the module
module.exports = db