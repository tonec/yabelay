const schedule = require('node-schedule')

module.exports = () => {
  schedule.scheduleJob('0 0 9 * * *', () => {
    console.log('running !!!!')
  })
}
