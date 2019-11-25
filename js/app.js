$(document).ready(function() {
    $("#header h1").hide().fadeIn(3000);
    $("#header h4").hide().fadeIn(6000);
    $("#hamburger").attr("aria-expanded", "true");
})

$(function() {
    var target = $('.bottom-content');
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    }
});

// close the Hamburger on clicking on item
$(".nav-item").on('click', function() {
    $("#hamburger").attr("aria-expanded", false);
});
