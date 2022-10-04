<script>
// @ts-nocheck

  import Feed from './lib/feed.svelte';

  import Form from './lib/form.svelte';

  // @ts-ignore
  let URLParameters = (new URL(window.location)).searchParams;

</script>

<main>

<!-- This error can just be ignored, it's typescript complaining in a non-typescript file. -->
{#if (new URL(window.location)).searchParams.has("URL")}
  <Feed />
{:else}
  <Form />
{/if}

</main>
