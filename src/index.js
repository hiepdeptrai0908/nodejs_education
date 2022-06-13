const express = require('express')
const morgan = require('morgan')
const path = require('path')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public/'))); // đường dẫn file tĩnh static

app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
})); // Định nghĩa engine
app.set('view engine', 'hbs'); // Set engine to 'handlebars' đã định nghĩa
app.set('views', path.join(__dirname, 'resources/views')) // set views folder

// Routes init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})