const router = require('express').Router()
const { serach } = require('../controllers/api/music')

router.get('/music/:query/:category', serach)
router.get('/music/:query', serach)

module.exports = router

