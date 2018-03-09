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

function test() {
    $.ajax({
        url: "https://formspree.io/flowdogshop@gmail.com",
        headers: { "Accept": "application/json;" },
        method: "POST",
        data: {
            message: "hello!"
        },
        dataType: "json",
        success: function (data) {
            console.error(data);
        },
        error: function (error) {
            console.error(error);
        }
    })
}