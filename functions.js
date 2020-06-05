module.exports = { setChoice }
const clickARock = document.querySelector('h1')
clickARock.addEventListener('click', setChoice('a rock'))

function setChoice (strArg) {
  // let choice = strArg
  // console.log('click passed')
  if (rockData.questions[id - 1].answer === choice) {
    // res.render('/right/:id', rockData)
    alert('right')
  } else {
    // res.render('/wrong/:id', rockData)
    alert('wrong')
  alert('pass')
}
