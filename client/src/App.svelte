<script>
    import { onMount } from 'svelte'
    import { usersFetch } from './store/users';
    import UserModal from './lib/UserModal.svelte';
    import UserTable from './lib/UserTable.svelte';
    import Toasts from './lib/Toasts.svelte';

    onMount(() => {
        usersFetch()
    });
</script>

<main>
    <h1>RedSky Coding Challenge</h1>
    <UserTable />
    <UserModal />
    <Toasts />
</main>

<style>
    main {
        margin: auto;
        max-width: 1000px;
        width: 100%;
    }
</style>
