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

    console.log(RSSurl);

    function loadXMLDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demo").innerHTML =
                this.responseText;
            }
        };
        xhttp.open("GET", RSSurl, true);
        xhttp.send();
    }

    loadXMLDoc();

</script>

<div class="root">
    <h1>{RSSurl}</h1>
    <div class="contentDiv">
        <h1>No content yet...</h1>
    </div>
</div>