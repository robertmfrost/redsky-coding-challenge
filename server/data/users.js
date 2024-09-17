let users = []

const userAdd = (newUser) => {
    users.push(newUser)
}

const userDelete = (id) => {
    const index = users.findIndex(user => user.id === id)
    if (index !== -1) {
        users.splice(index, 1)
        return true
    }
    return false
}

const userGet = (id) => users.find(user => user.id === id)

const userUpdate = (id, updatedData) => {
    const index = users.findIndex(user => user.id === id)
    if (index !== -1) {
        users[index] = { ...users[index], ...updatedData }
        return users[index]
    }
    return null
}

const usersGet = () => users

const usersInitialize = async (axios) => {
    // Initialize only if users isn't empty
    if (users.length) {
        return
    }

    try {
        const response = await axios.get('https://reqres.in/api/users')
        users = response.data.data
    } catch (error) {
        console.error('Error initializing users:', error.message)
    }
}

module.exports = {
    userGet,
    userAdd,
    userUpdate,
    userDelete,
    usersGet,
    usersInitialize,
}