const express = require('express')
const { usersGet } = require('../data/users')
const router = express.Router()

router.get('/users', (req, res) => {
    res.json({ data: usersGet() })
});

module.exports = router
