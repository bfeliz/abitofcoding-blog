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
    function sameHeights(selector) {
        $(selector).css("height", "fit-content");
        let sel = selector;
        const query = $(sel);
        let elements = query.length;
        let max = 0;
        if (elements) {
            while (elements--) {
                let element = query[elements];
                console.log("height", element.clientHeight);
                if (element.clientHeight > max) {
                    max = element.clientHeight;
                }
            }
            elements = query.length;
            while (elements--) {
                let element = query[elements];
                $(element).css("height", max + "px");
            }
        }
    }

    // event listener for column height match
    $(window).on("resize", function () {
        sameHeights($(".card-col"));
    });

    $(window).on("load", function () {
        sameHeights($(".card-col"));
    });
});
