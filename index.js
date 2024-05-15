// const dotenv = require('dotenv')
require('dotenv').config()
const doxname = process.env.SECRET_USER
const PORT = process.env.PORT
console.log(doxname);

const mysql = require('mysql');
const bodyParser = require('body-parser');

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World') //change this to index.html
})

app.listen(PORT)

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
  
  // Connect to the database
  connection.connect()
  
  // Define SQL query to insert a new user
  const newUser = { FirstName: 'Jesiah', LastName: 'Tapia' }
  const query = 'INSERT INTO employees SET ?'
  
  // Execute the SQL query
  connection.query(query, newUser, (error, results) => {
    if (error) {
      console.error('Error adding user:', error)
    } else {
      console.log('New user added successfully:', results)
    }
  })
  
  // Close the connection
  connection.end();


const host = process.env.DB_HOST;
const user = process.env.DB_USER;

console.log(host);
console.log(user);

