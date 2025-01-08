const express = require('express')
const app = express()
const port = 2025

app.get('/', (req, res) => {
  res.sendFile("./views/home.html" , { root : __dirname});
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})
