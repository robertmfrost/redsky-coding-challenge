import { writable } from 'svelte/store'

const defaultUser = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
}

export const userModal = writable({
    show: false,
    edit: false, // false = "create mode", true = "edit mode"
    user: {...defaultUser},
})

export const userModalOpen = (user = {...defaultUser}) => {
    userModal.set({
        show: true,
        edit: Boolean(user.id),
        user,
    })
}

export const userModalClose = () => {
    userModal.update((modalState) => ({
        ...modalState,
        show: false,
    }))
}
