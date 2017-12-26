const schedule = require('node-schedule')
const stories = require('./stories')

module.exports = () => {
  schedule.scheduleJob('0 0 9 * * *', () => {
    console.log('running stories')
    stories()
  })
}
