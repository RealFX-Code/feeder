<script>
    let error = "ERROR, No page content is here yet.";

    // @ts-ignore
    let URLParameters = (new URL(window.location)).searchParams;

    let RSSurl = URLParameters.get("URL");

    let ShouldRun = 0;

    for ( const param of URLParameters )
    {
        ShouldRun++;
        if ( ShouldRun != 1 )
        {
            RSSurl = RSSurl + "&" + param[0] + "=" + param[1];
        }
    }

    fetch(RSSurl)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            console.log(data);
            const items = data.querySelectorAll("item");
            let html = '';
            items.forEach(el => {
                html += `
                    <article>
                        <h2>
                            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
                                ${el.querySelector("title").innerHTML}
                            </a>
                        </h2>
                        <br>
                    </article>
                `;
            });
    document.getElementById("contentDiv").innerHTML = html;
    });
</script>

<div class="root">
    <h1><strong>{RSSurl}</strong></h1>
    <div class="spacer">
        <hr>
    </div>
    <div id="contentDiv">
        <h1>Loading content...</h1>
        <br>
    </div>
</div>

<style>

    * {
        margin: 0;
        padding: 0;
    }

    div.spacer {
        margin-top: 5vh;
        margin-bottom: 5vh;
    }

</style>