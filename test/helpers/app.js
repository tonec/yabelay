const mongoose = require('mongoose')
const config = require('../../config')

before(done => {
  mongoose.connect(config.db.testUri, { useMongoClient: true })
  mongoose.connection
    .once('open', () => done())
    .on('error', error => {
      console.warn('Warning: ', error)
    })
})

// beforeEach(done => {
//   const { drivers } = mongoose.connection.collections

//   drivers.drop()
//     .then(() => done())
//     .catch(() => done())
// })
