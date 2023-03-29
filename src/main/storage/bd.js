const { Client } = require('pg')
require("dotenv").config();
const client = new Client({
  user:process.env.pg_user,
  host:process.env.pg_host,
  database:process.env.pg_database,
  password:process.env.pg_password
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports=client;