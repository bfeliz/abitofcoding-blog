$(document).ready(function () {
    const search = $("#search-area");
    const searchResults = $("#search-input");
    const searchBar = $("#search-bar");
    const searchItems = $("#search-results");

    $(".sidenav").sidenav();

    search.on("submit", function () {
        console.log(searchResults.val());
    });

    $(".modal").modal({
        onOpenEnd: function () {
            $("#search-bar").focus();
        },
        onCloseEnd: function () {
            searchBar.val(" ");
            searchItems.html("");
        },
    });
});
