const express = require('express');
const app = express();
const { people } = require('./data')


// static assets
app.use(express.static('./methods-public'))
// parse json

app.use(express.json())


app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, message: 'provide name value' })
  }
  res.status(201).json({ success: true, person: name })
})


app.post('/api/people/postman', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, message: 'provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
})

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === Number(id))
  if (!person) {
    return res.status(404).json({ success: false, message: `no person id with ${id}` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
})


app.post('/login', (req, res) => {
  console.log(req.body)
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.send('Provide credentials')
})

app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res.status(404).json({ success: false, message: `no person id with ${req.params.id}` })
  }
  const newPeople = people.filter((person) => person.id !== Number(req.params.id))
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, (req, res) => {
  console.log('server is listening at 5000')
})
