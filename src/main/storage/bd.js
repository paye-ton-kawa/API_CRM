const { Client } = require('pg')
const client = new Client({
  user: 'mspr',
  host: 'localhost',
  database: 'mspr',
  password: 'mspr',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});