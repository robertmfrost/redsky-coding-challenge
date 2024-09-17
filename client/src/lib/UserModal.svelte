<script>
    import { userModal, userModalClose } from '../store/user-modal'
    import { userAdd, userUpdate } from '../store/users'

    $: userModal

    const handleSubmit = () => {
        if ($userModal.edit && $userModal.user.id) {
            userUpdate($userModal.user)
        } else {
            userAdd($userModal.user)
        }

        userModalClose()
    }

    const handleCancel = () => {
        userModalClose()
    }
</script>

{#if $userModal.show}
    <div class="overlay" on:click={handleCancel} />
    <div class="modal">
        <h2>{`${$userModal.edit ? 'Edit' : 'Create New'} User`}</h2>
        <form on:submit|preventDefault={handleSubmit}>
            <label>
                <h3>First Name</h3>
                <input type="text" bind:value={$userModal.user.first_name} required>
            </label>
            <label>
                <h3>Last Name</h3>
                <input type="text" bind:value={$userModal.user.last_name} required>
            </label>
            <label>
                <h3>Email Address</h3>
                <input type="email" bind:value={$userModal.user.email} required>
            </label>
            <label>
                <h3>Avatar Image Link</h3>
                <input type="text" bind:value={$userModal.user.avatar}>
            </label>
            <div class="modal-buttons">
                <button class="outline" type="button" on:click={handleCancel}>Cancel</button>
                <button type="submit">{$userModal.edit ? 'Save' : 'Create'}</button>
            </div>
        </form>
    </div>
{/if}

<style>
    .overlay {
        align-items: center;
        background: var(--color-secondary);
        bottom: 0;
        display: flex;
        height: 100%;
        justify-content: center;
        left: 0;
        opacity: var(--opacity-overlay);
        position: fixed;
        right: 0;
        top: 0;
        width: 100%;
        z-index: var(--z-index-modal);
    }

    .modal {
        background: var(--color-white);
        position: fixed;
        min-width: 672px;
        max-width: 100%;
        max-height: 100%;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        color: black;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        z-index: var(--z-index-modal);
    }

    h2 {
        background-color: var(--color-primary);
        color: var(--color-white);
        padding: 24px;
        margin: 0;
    }

    h3 {
        margin: 0 0 6px;
    }

    label {
        margin-bottom: 1.25rem;
    }

    form {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
    }

    .modal-buttons {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
</style>