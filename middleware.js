const express = require('express');
const app = express();

//Middleware
// req =>middleware=> res

const logger = (req, res, next) => {
  const method = req.method;
  console.log(method)
  const url = req.url
  console.log(url)
  const time = new Date().getFullYear()
  console.log(time)
  next()
}

app.get('/', logger, (req, res) => {

  res.send('Home Page')
})

app.get('/about', logger, (req, res) => {
  res.send('About Page')
})

app.listen(5000, (req, res) => {
  console.log('server is listening at 5000')
})