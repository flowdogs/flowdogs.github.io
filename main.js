$(document).ready(function () {
    scrollAnimationWhenNavbarIsClicked();
});


function scrollAnimationWhenNavbarIsClicked() {
    $(".navbar a").click(function () {
        $("body,html").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top - $(".navbar").outerHeight()
        }, 1000)
    });
}