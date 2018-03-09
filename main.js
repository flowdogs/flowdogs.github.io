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

function orderNow() {
    $.dialog({
        title: 'JakeChipman pro model',
        content: 'url:ordernow.html',
        closeIcon: true,
        columnClass: 'col-md-6 col-md-offset-6 col-xs-6 col-xs-offset-6',
        containerFluid: true,
        draggable: true,
        theme: 'bootstrap',
        backgroundDismiss: true,
        escapeKey: true,
    });
}