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

app.get('/api/v1/query', (req, res) => {
  console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search.toLowerCase())
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // return res.status(200).send('no products matched your search')
    return res.status(200).json({ success: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})




app.listen(5000, (req, res) => {
  console.log('server is listening at 5000')
})