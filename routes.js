const express = require('express')
const router = express.Router()
const path = require('path')
const filePath = path.join(__dirname, 'data.json')
const fs = require('fs')

module.exports = router

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/question/:id', (req, res) => {
  // ONCE BASIC FUNCTIONALITY WORKS ADD RANDOM ID  const randomId = setRandom()
  // readfile
  fs.readFile(filePath, (err, contents) => {
    let id = req.params.id
    //   // let choice = setChoice()
    if (err) return res.send(500)
    let rockData = JSON.parse(contents)
    let { question, answer, fact1, fact0, image0, image1 } = req.body
    let rock = { question, answer, fact1, fact0, image0, image1 }
    res.render('question', rockData.questions[id - 1])
  })
})

router.get('/answer/:id/:answer', (req, res) => {
  fs.readFile(filePath, (err, contents) => {
    if (err) return res.sendStatus(500)
    const id = Number(req.params.id)
    const data = JSON.parse(contents)
    const ramen = data.questions.find(element => element.id === id)
    const nextid = id + 1
    const theirAnswer = req.params.answer === 'a' ? 'a rock' : 'the rock'
    const viewData = { nextid }
    console.log()
    if (data.answer === theirAnswer) {
      const showInfo = {
        fact1: req.body.fact,
        image1: req.body.image
      }
      res.render('right', showInfo)
    } else {
      const showInfo = {
        fact0: req.body.fact,
        image0: req.body.image
      }
      res.render('wrong', showInfo)
    }
  })
})

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
