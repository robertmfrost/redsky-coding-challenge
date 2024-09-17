const express = require('express')
const { userUpdate } = require('../data/users')
const router = express.Router()

router.put('/user/:id', (req, res) => {
    const updatedUser = userUpdate(parseInt(req.params.id, 10), req.body)

    if (updatedUser) {
        res.json(updatedUser)
    } else {
        res.status(404).json({ message: 'User not found' })
    }
})

module.exports = router
