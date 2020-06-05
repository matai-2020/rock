const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes')
const fs = require('fs')
const filePath = path.join(__dirname, 'data.json')

const server = express()
module.exports = server

server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs' }))
server.set('view engine', 'hbs')

server.use(express.urlencoded({
  extended: false
}))

const staticFolder = path.join(__dirname, 'public')
server.use(express.static(staticFolder))

server.use('/', routes)
