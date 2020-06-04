const express = require('express')
const router = express.Router()
const path = require('path')
const filePath = path.join(__dirname, 'data.json')
const fs = require('fs')

module.exports = router

router.get('/', (req, res) => {
  res.send('hello world')
})

router.get('/question/:id', (req, res) => {
  let id = req.params.id

  // ONCE BASIC FUNCTIONALITY WORKS ADD RANDOM ID  const randomId = setRandom()
  // readfile

  fs.readFile(filePath, (err, contents) => {
    // let choice = setChoice()
    if (err) return res.send(500)
    let rockData = JSON.parse(contents)
    if (rockData.questions[id - 1].answer === setChoice()) {
      res.render('/right/:id', rockData)
    } else {
      res.render('/wrong/:id', rockData)
    }
  })

  // link data,json

  // check if answer is === a rock or the rock
  // render right/id
  // render wrong/id
})

function setChoice (strArg) {
  console.log('click passed')
  return strArg
}
// function setRandom () {
//   let result = Math.floor(Math.random() * Math.floor(5))
//   return result
// }
