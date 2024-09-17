const express = require('express')
const { userDelete } = require('../data/users')
const router = express.Router()

router.delete('/user/:id', (req, res) => {
    const success = userDelete(parseInt(req.params.id, 10))
    if (success) {
        res.status(204).end()
    } else {
        res.status(404).json({ message: 'User not found' })
    }
})

module.exports = router
