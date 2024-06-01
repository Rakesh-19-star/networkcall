const express = require('express')
const app = express()
app.get('/', (request, response) => {
  response.send('hallo world')
})
app.listen(3000)
