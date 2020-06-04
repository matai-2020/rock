const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes')
const fs = require('fs')
const filePath = path.join(__dirname, 'data.json')

const server = express()
module.exports = server

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine')

server.use(express.urlencoded({
  extended: false
}))

const staticFolder = path.join(__dirname, 'public')
server.use(express.static(staticFolder))

server.use('/', routes)

server.get('/question/:id', (req, res) => {
  let id = req.params.id
  let choice = 
  const randomId = setRandom()
  // readfile
  fs.readFile(filePath, (err, contents) => {
    if (err) return res.send(500)
    let rockData = JSON.parse(contents)
    if (questions[id-1].answer === choice
    
  })
  // link data,json

  // check if answer is === a rock or the rock
  // render right/id
  // render wrong/id
})
