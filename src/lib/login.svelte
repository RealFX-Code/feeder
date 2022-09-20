<script>
    import{user}from'./userManagement.js';let userLocal;user.subscribe(value=>{userLocal = value;});
    /* Snippet above gets user status and saves it to userLocal. */

</script>

<main>
    <div class="mainApp">
        <h1>login</h1>
        <h1>Welcome, {userLocal.username}!</h1>
        {#if userLocal.loggedIn}
            <h1>You are logged in!</h1>
        {:else}
            <h1>You aren't logged in :(</h1>
        {/if}
    </div>
</main>