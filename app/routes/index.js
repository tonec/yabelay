const indexController = require('../controllers/indexController')

module.exports = app => {
  app.get('/api', indexController.index)
}
