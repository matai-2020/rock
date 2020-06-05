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



// }
