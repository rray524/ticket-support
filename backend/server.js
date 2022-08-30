const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000

const app = express()

app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Welcome to the support ticket systems' })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))