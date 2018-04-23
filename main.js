$(document).ready(function () {
    scrollAnimationWhenNavbarIsClicked();
});

$("#logo").on("mouseout", function () {
    this.src = "images/flowdog-logo-notext-transparent.png";
    this.style = "background-color: inherit";
});

$("#logo").on("mouseover", function () {
    this.src = "images/flowdog-logo-notext-inverted-transparent.png";
    this.style = "background-color: #f4f4f4";
});

function scrollAnimationWhenNavbarIsClicked() {
    $(".navbar a").click(function () {
        $("body,html").animate({
            scrollTop: $("#" + $(this).data('value')).offset().top - $(".navbar").outerHeight()
        }, 1000)
    });
}

function orderNow(title) {
    $.dialog({
        title: title,
        content: 'url:ordernow.html',
        closeIcon: true,
        columnClass: 'col-md-4 col-md-offset-8 col-xs-6 col-xs-offset-6',
        containerFluid: true,
        draggable: true,
        theme: 'bootstrap',
        backgroundDismiss: true,
        escapeKey: true,
    });
}