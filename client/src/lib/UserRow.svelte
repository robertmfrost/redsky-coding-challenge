<script>
    import { createEventDispatcher } from 'svelte'

    export let user

    const dispatch = createEventDispatcher()

    const handleEdit = () => {
        dispatch('edit', user)
    }

    const handleDelete = () => {
        dispatch('delete', user.id)
    }
</script>

<tr>
    <td class="avatar">
        <img alt={`${user.first_name} ${user.last_name}`} src={user.avatar} />
    </td>
    <td>{user.first_name}</td>
    <td>{user.last_name}</td>
    <td>{user.email}</td>
    <td>
        <button on:click={handleEdit}>Edit</button>
    </td>
    <td>
        <button on:click={handleDelete}>Delete</button>
    </td>
</tr>

<style>
    img {
        display: block;
        margin: auto;
        height: 40px;
        width: 40px;
    }

    td {
        border-top-style: solid;
        border-top-width: 1px;
        border-top-color: var(--color-gray);
        vertical-align: middle;
        padding: 0.5rem 1rem;
    }

    button {
        padding: 10px 8px;
    }
</style>

