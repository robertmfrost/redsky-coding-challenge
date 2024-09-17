<script>
    import { userModalOpen } from '../store/user-modal';
    import { users, userDelete } from '../store/users'
    import UserRow from './UserRow.svelte'

    let userList = []

    // Subscribe to the store
    $: userList = $users

    const handleCreate = () => {
        userModalOpen()
    }

    const handleEdit = (event) => {
        const user = event.detail
        userModalOpen(user)
    }

    const handleDelete = (event) => {
        const userID = event.detail

        userDelete(userID)
    }
</script>

<section>
    <div class="create-user-button-container">
        <button on:click={handleCreate}>Create New User</button>
    </div>
    <table>
        <caption><h2>User List</h2></caption>
        {#if userList.length}
        <thead>
            <tr>
                <th><h3>Avatar</h3></th>
                <th><h3>First Name</h3></th>
                <th><h3>Last Name</h3></th>
                <th><h3>Email Address</h3></th>
                <th colspan="2" />
            </tr>
        </thead>
        {/if}
        <tbody>
            {#if !userList.length}
                <tr>
                    <td class="no-users-found">No users found. Create a new user to get started.</td>
                </tr>
            {/if}
            {#each userList as user (user.id)}
                <UserRow {user} on:edit={handleEdit} on:delete={handleDelete} />
            {/each}
        </tbody>
    </table>
</section>

<style>
    .create-user-button-container {
        display: flex;
        justify-content: end;
        margin: 3rem 0 1rem;
    }

    .no-users-found {
        padding: 1rem;
        text-align: center;
    }

    table {
        border-width: 1px;
        border-style: solid;
        border-color: var(--color-primary);
        border-collapse: collapse;
        text-align: left;
        width: 100%;
    }

    h2 {
        background-color: var(--color-primary);
        color: var(--color-white);
        margin: 0;
        line-height: 48px;
        padding: 0 1rem;
        text-align: left;
    }

    th {
        padding: 1rem;
    }

    h3 {
        margin: 0;
    }
</style>