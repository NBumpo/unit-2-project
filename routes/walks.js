const express = require('express')
const router = express.Router()
const walksCtrl = require('../controllers/walks')


router.post('/', walksCtrl.create)
router.get('/', walksCtrl.index)
router.get('/new', walksCtrl.new)
module.exports = router;