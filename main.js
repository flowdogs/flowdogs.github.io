$(document).ready(function () {
    setNavBar();
    scrollAnimationWhenNavbarIsClicked();
});

function setNavBar() {
    // $.get("navigation.html", function(data){
    //     $("#nav-placeholder").replaceWith(data);
    // });

    // console.error($("#nav-placeholder"));
    // $("#nav-placeholder").load("./nav-bar.html");
}

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