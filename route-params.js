const express = require('express');
const app = express();
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params
  const singleProduct = products.find((single) => single.id === Number(productID))
  if (!singleProduct) { return res.status(404).send('Product Not found') }
  res.json({
    singleProduct
  })
})


app.listen(5000, (req, res) => {
  console.log('server is listening at 5000')
})