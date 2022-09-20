<script>
  import Sample from './lib/sample.svelte'
  import Login from './lib/login.svelte'
  import Error from './lib/error.svelte'
  import { user, BannedTokens } from './lib/userManagement.js'

  let userLocal;
  
  user.subscribe(value=>{userLocal=value;});

  let error = false;
  let errorDescription = "undefined";

  // @ts-ignore
  if (BannedTokens.token.indexOf(userLocal.token) !== -1) {
    error = true;
    errorDescription = "InvalidToken";
  }

</script>

<main>

{#if error}
 <Error errorCode={errorDescription} />
{:else}
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
{/if}

</main>