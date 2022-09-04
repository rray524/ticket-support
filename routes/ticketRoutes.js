const express = require('express')
const router = express.Router()
const { getTickets, createTicket, getTicket, deleteTicket, updateTicket } = require('../controllers/ticketController')

const { protect } = require('../middleware/authMiddleware')

// Re-route into note routers
const noteRouter = require('./noteRoutes')
router.use('https://damp-dusk-91671.herokuapp.com/:ticketId/notes', noteRouter)

router.route('https://damp-dusk-91671.herokuapp.com/').get(protect, getTickets).post(protect, createTicket)

router.route('https://damp-dusk-91671.herokuapp.com/:id').get(protect, getTicket).delete(protect, deleteTicket).put(protect, updateTicket)

module.exports = router