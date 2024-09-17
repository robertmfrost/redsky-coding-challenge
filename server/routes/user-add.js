const express = require('express')
const { userAdd, usersGet } = require('../data/users')
const router = express.Router()

router.post('/user', (req, res) => {
    // Determine appropriate new unique user ID
    const users = usersGet()
    let newID = 0
    do {
        newID++
    } while (users.some(user => user.id === newID))

    // Construct new user
    const { email, first_name, last_name, avatar } = req.body
    const newUser = { id: newID, email, first_name, last_name, avatar }

    // Add the user
    userAdd(newUser)
    res.status(201).json(newUser)
})

module.exports = router
