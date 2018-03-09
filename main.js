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
        content: 'url:dialogcontent.html',
            // '<div class="container">' +
            //     '<form action="https://formspree.io/flowdogshop@gmail.com" method="POST">' +
            //         '<div class="row">' +
            //             '<div class="col-lg-4 col-md-4 col-sm-12">' +
            //                 '<h1>Get in Touch</h1>' +
            //             '</div>' +
            //             '<div class="col-lg-8 col-md-8 col-sm-12 right">' +
            //                 '<div class="form-group">' +
            //                     '<input type="text" class="form-control form-control-lg" placeholder="Your Name" name="name">' +
            //                 '</div>' +
            //                 '<div class="form-group">' +
            //                     '<input type="email" class="form-control form-control-lg" placeholder="YourEmail@email.com" name="_replyto">' +
            //                 '</div>' +
            //                 '<div class="form-group">' +
            //                     '<textarea class="form-control form-control-lg"></textarea>' +
            //                 '</div>'+
            //                 '<input type="submit" class="btn btn-secondary btn-block" value="Send Order" name="">' +
            //             '</div>' +
            //         '</div>' +
            //     '</form>' +
            // '</div>',
        closeIcon: true,
        columnClass: 'col-md-6 col-md-offset-6 col-xs-6 col-xs-offset-6',
        containerFluid: true,
        draggable: true,
        theme: 'bootstrap',
        backgroundDismiss: true,
        escapeKey: true,
    });
}