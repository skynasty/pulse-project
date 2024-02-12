const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const db = require('./models')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')

const PORT = process.env.PORT || 5432


const app = express()

//промежуточное ПО
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())

//синхронизация базы данных и принудительное присвоение ей значения false, чтобы мы не потеряли данные

db.sequelize.sync({ force: true }).then(() => {
    console.log("БД была повторно синхронизирована")
})

//маршруты для пользовательского API
app.use('/api/users', userRoutes)

app.listen(PORT, ()=> {
    console.log(`Сервер запущен на порте ${PORT}`)
});
