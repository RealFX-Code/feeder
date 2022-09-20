<script>
  import{user}from'./userManagement.js';let userLocal;user.subscribe(value=>{userLocal = value;});
  let count = 0
  const increment = () => {
    count += 1
  }

  let Logout = () => window.location.assign('http://' + window.location.host);
</script>

<h1>You are logged in, Your feed is below.</h1>

<h2>There's nothing here now, Have a button.</h2>

<h2>Welcome {userLocal.nickname}!</h2>

<button on:click={increment}>
  count is {count}
</button>

<br><br>

<button on:click={Logout}><span>Log out</span></button>