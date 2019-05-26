const path = require('path')
const router = require('express').Router()
const defaultCtrl = require(path.resolve('./app/controller/default.js'))
const middleware = require(path.resolve('./app/middleware/authority'))

router.get('/', defaultCtrl.default)
router.get('/socket', defaultCtrl.socket)

module.exports = router