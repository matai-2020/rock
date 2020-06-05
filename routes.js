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
    let choice = setChoice(strArg)
    if (err) return res.send(500)
    let rockData = JSON.parse(contents)
    if (rockData.questions[id - 1].answer === choice) {
      res.render('/right/:id', rockData)
    } else {
      res.render('/wrong/:id', rockData)
    }
  })
})

router.get('/right/:id', (req, res) => {
  const filePath = path.join(__dirname, ('data.json'))
  fs.readFile(filePath, (err, contents) => {
    if (err) return res.sendStatus(500)
    const answer = JSON.parse(contents)
    const nextid = Number(req.params.id +1)
    const viewData = { answer: answer , nextid}
    res.render('answer1', viewData)
  })

  // link data,json

  // check if answer is === a rock or the rock
  // render right/id
  // render wrong/id
})

function setChoice (straArg) {
  console.log('click passed')
  return strArg
}
// function setRandom () {
//   let result = Math.floor(Math.random() * Math.floor(5))
//   return result
// }

// route /:id
// get whatever data is displayed on view - already written
// use req.params.id then plus 1 on that id
// build viewdata object that includes readfile data AND the "next id"
// e.g const viewData = {
// contents:contents
// nextId: nextId (the req.params.id +1 thing)
//
// }
