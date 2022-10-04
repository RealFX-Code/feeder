<script>

// @ts-nocheck

  import Feed from './lib/feed.svelte';

  import Form from './lib/form.svelte';

</script>

<main>

<!-- This error can just be ignored, it's typescript complaining in a non-typescript file. -->
{#if (new URL(window.location)).searchParams.has("URL")}
  <Feed />
{:else}
  <Form />
{/if}

</main>
