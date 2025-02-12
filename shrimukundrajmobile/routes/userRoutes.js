const express = require('express')
const router = express.Router()
const {getUser}=require('../smmcotroller/userController')


router.get('/',getUser)


module.exports = router








