$(document).ready(function () {
    scrollAnimationWhenNavbarIsClicked();
});

function scrollAnimationWhenNavbarIsClicked() {
    $(".navbar a").click(function () {
        console.error($("#" + $(this).data('value')));
        console.error($("#" + $(this).data('value')).offset());
        console.error($("#" + $(this).data('value')).offset().top);

        $("body,html").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top
        }, 1000)
    });
}