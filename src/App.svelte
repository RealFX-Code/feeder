<script>
  import Sample from './lib/sample.svelte'
  import Login from './lib/login.svelte'

  let userManager = {
    username: "SampleName",
    loggedIn: true
  }
</script>

<main>
{#if window.location.pathname == "/feed"}
  <Sample />
{:else if window.location.pathname == "/"}
  <Login />
{:else}
  <script>

    function SendUserBackToWhereTheyShouldBe() {
      window.location.assign('http://' + window.location.host)
    }
    SendUserBackToWhereTheyShouldBe()
    /*
      Now this is functional programming!
    */
  </script>
{/if}
</main>

<style>
  main {
    color: #232323;
  }
</style>
