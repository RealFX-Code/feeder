<script>
  import Sample from './lib/sample.svelte'
  import Login from './lib/login.svelte'
  import Error from './lib/error.svelte'
  import { user, BannedTokens } from './lib/userManagement.js'

  let userLocal;
  
  user.subscribe(value=>{userLocal=value;});

  let error = false;

  // @ts-ignore
  if (userLocal.token.toLowerCase().includes(BannedTokens.token.toLowerCase()))
  {
    error = true;
  }

</script>

<main>

{#if error}
 <Error />
{/if}

{#if userLocal.loggedIn == true}
  <Sample />
{:else if userLocal.loggerIn == false}
  <Login />
{:else}
  <script>

    let SendUserBackToWhereTheyShouldBe = () => window.location.assign('http://' + window.location.host);
    SendUserBackToWhereTheyShouldBe();

    /*
      Now this is functional programming!
    */
  </script>
{/if}
</main>