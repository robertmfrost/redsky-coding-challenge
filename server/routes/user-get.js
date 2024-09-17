const express = require('express')
const { userGet } = require('../data/users')
const router = express.Router()

router.get('/user/:id', (req, res) => {
    const user = userGet(parseInt(req.params.id, 10))
    if (user) {
        res.json(user)
    } else {
        res.status(404).json({ message: 'User not found' })
    }
})

module.exports = router
