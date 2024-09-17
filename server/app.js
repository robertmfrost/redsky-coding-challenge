const express = require('express')
const cors = require('cors')
const axios = require('axios')

const { usersInitialize } = require('./data/users')
const routeUserAdd = require('./routes/user-add')
const routeUserGet = require('./routes/user-get')
const routeUserDelete = require('./routes/user-delete')
const routeUserUpdate = require('./routes/user-update')
const routeUsersGet = require('./routes/users-get')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

usersInitialize(axios)

app.use('/api', routeUserAdd)
app.use('/api', routeUserGet)
app.use('/api', routeUserDelete)
app.use('/api', routeUserUpdate)
app.use('/api', routeUsersGet)

module.exports = app
