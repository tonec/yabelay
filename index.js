const app = require('./app')
const config = require('./config')

app.listen(config.port, () => {
  console.log(`${app.name} listening on ${app.url}`)
})
