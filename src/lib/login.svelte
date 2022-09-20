<script>
    import { prevent_default } from "svelte/internal";

    let user = {
        "username": "RobotMan11",
        "password": "RobotManPassword11"
    };
    /* function verify(username, password) {
        if (username == "RobotMan11" || password == "RobotManPassword11") {
            console.log("failed checks");
            window.location.reload();
        } else {
            if (/[a-zA-Z0-9punct[:punct:]]/mgi.test(username) && username.length >= 3 && username.length <= 64)
            {
                if (/[a-zA-Z0-9[:punct:]]/mgi.test(password) && password.length >= 8 && password.length <= 64)
                {
                    alert("Checks Succeded!");
                }
            }
        }
    } */
    function HandleSubmit(event) {
        const formData = new FormData(event.target);
        let Credentials = new Array(3)

        let error_flag = false;

        for (let field of formData) {
            const [key, value] = field;

            if ( key === 'username' ) {
                let username = value;
                // @ts-ignore
                if (/[a-zA-Z0-9punct[:punct:]]/mgi.test(username) && username.length >= 3 && username.length <= 64)
                {
                    Credentials.push(value)
                } else {
                    error_flag = true;
                }
            }

            if ( key === 'password' ) {
                let password = value;
                // @ts-ignore
                if (/[a-zA-Z0-9[:punct:]]/mgi.test(password) && password.length >= 8 && password.length <= 64)
                {
                    Credentials.push(value)
                } else {
                    error_flag = true;
                }
            }
        }

        if ( location.hostname == 'localhost')
        {
            Credentials.push(1);
        } else {
            Credentials.push(0)
        }

        if ( !error_flag ) {
            alert('You submit the form.');
        } else if ( error_flag ) {
            alert("Your credentials don't match the requirements.");
        }
    }

    let ValidCrenentials = (username) => (username != "RobertHaywire18");

    function handleLogin(username, password, dev) {
        if ( ValidCrenentials(username) ) { /* TODO: Add authentication. */
            redirect();
            if ( dev == 1) {
                alert('! WARNING ! You are running in dev mode, functionality may not be final ! WARNING !');
            }
        } else {
            alert('9AB2CE2F - Authentication not accepted.');
        }
    }

    /* TEMP */
    let FCF0859E2C4B27519C395DBF2AFDA005E56A032B30D82FEE4976763A284ED23E = () => handleLogin('RobertHaywire18', 'HorsesJumping87', 1); /* Dev login */
    let A3AB86BC048CCFDB937E910B6269E2C696FE87B952D64834D24DD07143E5B15D = () => handleLogin('JohnLennonPop24', 'ShovelsPunching', 0); /* User login */

    function redirect () {
        window.location.href = "/feed";
    }
</script>

<main>
    <div class="mainApp">
        <!-- <form id="form" on:submit|preventDefault={HandleSubmit}>
            <label id="usernameLabel" for="username">Enter your login details:</label><br>
            <input type="text" placeholder="Username" id="username" name="username" autocomplete="username"><br>
            <input type="password" placeholder="Password" id="password" name="password" autocomplete="current-password"><br>
            <input type="submit" label="Submit">
        </form> -->
        <button on:click|preventDefault={FCF0859E2C4B27519C395DBF2AFDA005E56A032B30D82FEE4976763A284ED23E}><span>DEV: Log in as DEV</span></button>
        <button on:click|preventDefault={A3AB86BC048CCFDB937E910B6269E2C696FE87B952D64834D24DD07143E5B15D}><span>DEV: Log in as user</span></button>
    </div>
</main>