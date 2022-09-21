<script>
  import Feed from './lib/feed.svelte'
  function HandleURL(event) {
    let url = event.target.elements.URLinput.value;
    window.location.assign('https://' + window.location.host + "/feed?URL=" + url);
  }

</script>

<main>

{#if window.location.pathname == "/feed"}
  <Feed />
{:else}
  <div>
    <img class="logo" src="/logo-light@1x.png" alt="rx-//RSS">
  </div>
  <h1>Welcome to my RSS client, Add an RSS URL below.</h1>
  <form on:submit|preventDefault={HandleURL}>
    <input type="url" id="URLinput" placeholder="https://example.com/index.php?show=rss">
    <button type="submit">See the feed from URL</button>
  </form>
{/if}
</main>

<style>
  .logo {
    height: 20em;
    padding: 1.5em;
    will-change: filter;
    color: #e3e3e3;
  }

  input[type=url] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 1em;
  }
  button {
    width: 100%;
  }

</style>
