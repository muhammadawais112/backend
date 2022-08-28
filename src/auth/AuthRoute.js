const router = require('express').Router()
const AuthController = require("./AuthController")


// public
router.post('/register', AuthController.userRegister)
router.post('/login', AuthController.userLogin)


// private



module.exports = router;