const express = require('express')
const path = require('path')


const app = express();

app.use(express.static('./public'))


app.get('/', (req, res) => {
  res.sendFile(__dirname, './navbar-app/index.html')
})

app.all('*', (req, res) => {
  res.status(403).send('resource not found')
})



app.listen(5000, () => {
  console.log('server is listening at port 5k')
})