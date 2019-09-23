$("#test").on("click", function() {
    console.log("i work niggs");
});

$.get("/api/all", function(data) {
    console.log(data);
    for(let i = 0; i<data.length; i++) {
        let snippet = $("<td>");
        snippet.addClass("snippet");

        snippet.append("<p>" + data[i].name + "</p>");
        snippet.append("<p>" + data[i].number+ "</p>");
        snippet.append("<p>" + data[i].dre + "</p>")

        $("#realtorsTableRow1").prepend(snippet);
    };
});