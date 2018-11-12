const router = require('express').Router()
const { serach } = require('../controllers/api/music')

router.post('/music', serach)

module.exports = router

