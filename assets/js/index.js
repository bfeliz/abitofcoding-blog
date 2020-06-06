$(document).ready(function () {
    const searchBar = $("#search-bar");
    const searchItems = $("#search-results");
    const images = $(".kg-image");

    images.addClass("responsive-img");

    $(".sidenav").sidenav();

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
