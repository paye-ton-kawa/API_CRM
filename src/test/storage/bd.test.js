const { Client } = require('pg')
require("dotenv").config();
describe('Database connection', () => {
  test('should connect to database', (done) => {
    const client = new Client({
      user:process.env.pg_user,
      host:process.env.pg_host,
      database:process.env.pg_database,
      password:process.env.pg_password
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
