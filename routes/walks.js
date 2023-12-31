const express = require('express')
const router = express.Router()
const walksCtrl = require('../controllers/walks')


router.post('/', walksCtrl.create)
router.get('/', walksCtrl.index)
router.get('/new', walksCtrl.new)
router.get('/:id', walksCtrl.show);
router.delete('/:id', walksCtrl.deleteWalk)
router.get("/:id/edit",walksCtrl.showEdit)
router.put("/:id",walksCtrl.update)
module.exports = router;