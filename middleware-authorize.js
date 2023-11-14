const express = require('express');
const app = express();
const authorize = require('./authorize')
const logger = require('./logger')

//Middleware
// req =>middleware=> res

app.use([logger, authorize])


app.get('/', (req, res) => {

  res.send('Home Page')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})
app.get('/api/products', (req, res) => {
  res.send('Products Page')
})
app.get('/api/items', (req, res) => {
  console.log(req.user.id)
  res.send('Item Page')
})

app.listen(5000, (req, res) => {
  console.log('server is listening at 5000')
})