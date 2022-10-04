<script>

  console.log('FEEDER: ' + 'Loaded feeder\'s API!');

  console.log(location.protocol)

  function HandleURL(event) {
    let url = event.target.elements.URLinput.value;
    
    window.location.assign(window.location.protocol + '//' + window.location.host + window.location.pathname + '?URL=' + url);
  }


</script>

<div class="root">
    <div>
        <!--        Classname says what mode the user prefers,            -->
        <!--      Image suffix says what color the image hero is.         -->
        <img class="logo-dark hero" src="./logo-light@1x.png" alt="rx-//RSS">
        <img class="logo-light hero" src="./logo-dark@1x.png" alt="rx-//RSS"> 
    </div>
    <h1>Welcome to my RSS client, Add an RSS URL below.</h1>
    <form on:submit|preventDefault={HandleURL}>
        <input type="url" id="URLinput" placeholder="https://example.com/feed.rss">
        <button type="submit">See the feed from URL</button>
    </form>
    <br>
    <p><strong>! WARNING !</strong> It is a known bug that some websites just won't work. <strong>! WARNING !</strong></p>
</div>

<style>
    .hero {
      display: none;
      height: 20em;
      padding: 1.5em;
      will-change: filter;
    }
  
    @media (prefers-color-scheme: light) {
      .logo-light {
        display: unset;
      }
      .logo-dark {
        display: none;
      }
    }
    @media (prefers-color-scheme: dark) {
      .logo-dark {
        display: unset;
      }
      .logo-light {
        display: none;
      }
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