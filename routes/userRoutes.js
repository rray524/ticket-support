const express = require("express")
const router = express.Router()
const { registerUser, loginUser, getMe } = require('../controllers/userController')
const { protect } = require("../middleware/authMiddleware")

router.post("https://damp-dusk-91671.herokuapp.com/", registerUser)
router.post("https://damp-dusk-91671.herokuapp.com/login", loginUser)
router.get("https://damp-dusk-91671.herokuapp.com/me", protect, getMe)

module.exports = router;