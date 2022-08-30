const express = require('express')
require('colors')
const { errorHandler } = require('../middleware/errorHandler')
const dotenv = require('dotenv').config()
const connectDB = require("../config/db")
const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Welcome to the support ticket systems' })
})

// connectDB
connectDB();


// Login/Register Routes
app.use('/api/users', require('../routes/userRoutes'))

// error handler (NOTE: should be under Login/register routes)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))