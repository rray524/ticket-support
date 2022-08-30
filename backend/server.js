const express = require('express')
const { errorHandler } = require('../middleware/errorHandler')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Welcome to the support ticket systems' })
})

// error handler
app.use(errorHandler)

// Login/Register Routes
app.use('/api/users', require('../routes/userRoutes'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))