$(document).ready(function() {
    $("#header h1").hide().fadeIn(3000);
    $("#header h4").hide().fadeIn(6000);
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
