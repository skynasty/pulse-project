const express = require('express')
const userController = require('../controllers/userController')
const { signup, login } = userController
const userAuth = require('../middleware/userAuth')

const router = express.Router()

//конечная точка регистрации
//передача функции промежуточного программного обеспечения в регистрацию

router.post('/signup', userAuth.saveUser, signup)

//маршрут входа

router.post( '/login', login )

module.exports = router