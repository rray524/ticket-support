const express = require('express')
require('colors')
const { errorHandler } = require('../middleware/errorHandler')
const dotenv = require('dotenv').config()
const connectDB = require("../config/db")
const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('It is running fine')
})

// connectDB
connectDB();


//  Routes
app.use('/api/users', require('../routes/userRoutes'))
app.use('/api/tickets', require('../routes/ticketRoutes'))

// error handler (NOTE: should be under Login/register routes)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))