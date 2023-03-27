const { Client } = require('pg')

describe('Database connection', () => {
  test('should connect to database', (done) => {
    const client = new Client({
      user: 'mspr',
      host: 'localhost',
      database: 'mspr',
      password: 'mspr',
      port: 5432,
    }, 10000)

    client.connect((err) => {
      if (err) {
        done.fail(err)
      } else {
        console.log("Connected!")
        done()
      }
    })
  })
})
