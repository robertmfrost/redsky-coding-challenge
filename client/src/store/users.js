import { toasts } from 'svelte-toasts'
import { writable } from 'svelte/store'

const serverURL = 'http://localhost:5678'

export const users = writable([])

export const usersFetch = async () => {
    try {
        const response = await fetch(`${serverURL}/api/users`)

        if (response.ok) {
            const data = await response.json()
            users.set(data.data)
        } else {
            toasts.error('Failed to fetch users')
        }

    } catch (error) {
        toasts.error('Error fetching users:', error)
    }
}

export const userAdd = async (user) => {
    try {
        const response = await fetch(
            `${serverURL}/api/user`,
            {
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST'
            }
        )

        if (response.ok) {
            toasts.success('User added successfully.')
            usersFetch()
        } else {
            toasts.error('Failed to add user')
        }
    } catch (error) {
        toasts.error('Error adding user', error)
    }
}

export const userDelete = async (id) => {
    try {
        const response = await fetch(`${serverURL}/api/user/${id}`, { method: 'DELETE' })

        if (response.ok) {
            toasts.success('User deleted successfully.')
            usersFetch()
        } else {
            toasts.error(`Failed to delete user with ID: ${id}`)
        }
    } catch (error) {
        toasts.error(`Error deleting user with ID: ${id}`, error)
    }
}

export const userUpdate = async (user) => {
    try {
        if (!user.id) {
            throw Error
        }

        const response = await fetch(
            `${serverURL}/api/user/${user.id}`,
            {
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'PUT'
            }
        )

        if (response.ok) {
            toasts.success('User updated successfully.')
            usersFetch()
        } else {
            toasts.error(`Failed to update user with ID: ${user.id}`)
        }
    } catch (error) {
        toasts.error(`Error updating user with ID: ${user.id}`, error)
    }
}