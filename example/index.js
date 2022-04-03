const serve = require('../src/server')
const HelloService = require('./HelloService')

serve.init()
serve.registerService(HelloService)
