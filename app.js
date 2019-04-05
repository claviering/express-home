const ip = require('ip')
const path = require('path')
const app = require('express')()
const debug = require('debug')('app')
const router = require(path.resolve('./app/router'))
const config = require(path.resolve('./app/config'))
const middleware = require(path.resolve('./app/middleware'))
const socket = require(path.resolve('./app/middleware/socket'))

middleware(app)
router(app)

// WebSocket
const http = socket(app)

http.listen(config.port, () => debug(`server working on http://127.0.0.1:${config.port} http://${ip.address()}:${config.port}`))