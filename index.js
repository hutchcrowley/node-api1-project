const express = require('express')
const db = require('./database.js')

// call express function and assign it to server variable
const server = express()

// tell the client we'll be sending off data in json format
server.use(express.json())

// first endpoint for handling a 'home' route

server.get('/', (req, res) => {
  res.json({
    message: 'welcome to our API'
  })
})
