module.exports = {
  index: (req, res, next) => {
    res.send({ greeting: 'Hello' })
  }
}
