const restify = require('restify')
const mongoose = require('mongoose')
const im = require('is-master')
const config = require('../config')
const routes = require('./routes')
const tasks = require('./tasks')

const app = restify.createServer()

mongoose.Promise = global.Promise

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(config.db.uri, { useMongoClient: true })
  im.start()
}

app.use(restify.plugins.jsonBodyParser({ mapParams: true }))
app.use(restify.plugins.queryParser({ mapParams: true }))
app.use(restify.plugins.acceptParser(app.acceptable))

routes(app)

tasks()

module.exports = app
