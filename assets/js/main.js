// Track whether the Table of Contents is hidden.
var is_toc_hidden = true;

// If the button is clicked, toggle the Table of Content's state.
$(".nav-button").click(function() {
    is_toc_hidden = !is_toc_hidden
    $("#toc").toggleClass("is-hidden");
});

// If the window is scrolled while the table of contents is visible, hide it.
$(window).scroll(function() {
    if(!is_toc_hidden) {
        is_toc_hidden = !is_toc_hidden
        $("#toc").addClass("is-hidden");
    }
});

// Better abbreviations.
$("abbr").hover(function(event) {
    $this = $(this);
    $this.addClass("show-tooltip").attr("title");
}, function(event) {
    $this = $(this);
    $this.removeClass("show-tooltip");
});