$(document).ready(function () {
    const search = $("#search-area");
    const searchResults = $("#search-input");
    $(".sidenav").sidenav();

    search.on("submit", function () {
        console.log(searchResults.val());
    });
});
