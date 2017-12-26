const API_ROOT = '/api'
const DB_NAME = 'yabelay'

module.exports = {
  port: process.env.PORT || '8080',
  basePath: (path) => API_ROOT.replace(/\/$/, '') + '/' + path.replace(/^\//, ''),
  db: {
    uri: process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/${DB_NAME}`,
    testUri: `mongodb://127.0.0.1:27017/${DB_NAME}_test`
  }
}
