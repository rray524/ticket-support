const asyncHandler = require('express-async-handler')

const registerUser = asyncHandler(async (req, res) => {
    // console.log(req.body);
    const { name, email, password } = req.body;
    //validation
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please update all fields')
    }
    res.send('Register Users')
})
const loginUser = asyncHandler(async (req, res) => {
    res.send('Login Users')
})

module.exports = {
    registerUser, loginUser
}