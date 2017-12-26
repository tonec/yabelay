const schedule = require('node-schedule')

schedule.scheduleJob('0 0 9 * * *', () => {
  console.log('running !!!!')
})
