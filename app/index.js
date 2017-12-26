const restify = require('restify')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('../config')
const routes = require('./routes')

const app = restify.createServer()

mongoose.Promise = global.Promise

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(config.db.uri, { useMongoClient: true })
}

app.use(bodyParser.json())

routes(app)

app.use((err, req, res, next) => {
  res.send({ error: err._message })
})

module.exports = app
