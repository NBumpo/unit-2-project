const express = require('express')
const router = express.Router()
const allusersCtrl = require('../controllers/allusers')

router.get('/', allusersCtrl.index)



module.exports = router;