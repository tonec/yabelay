const request = require('supertest')
const expect = require('chai').expect
const app = require('../../')

describe('App init', () => {
  it('test api root', done => {
    request(app)
      .get('/api')
      .end((err, res) => {
        expect(err).to.be.null
        expect(res.body.greeting).to.equal('Hello')
        done()
      })
  })
})
