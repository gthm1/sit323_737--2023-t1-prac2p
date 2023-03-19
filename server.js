

const express = require('express')
const app = express()


// Setting ejs as the template engine
app.set('view engine', 'ejs')

// Define a default home page route handler 
app.get('/', (req, res) => {
  const name = 'Gowtham'
  const age = 24
  const course = 'Master of Applied Artificial Intelligence Professional'

  res.render('index', { name, age, course })
})


// Start the server on port 3000
app.listen(3000, () => {
  console.log('Listening on port 3000')
})
