$(function () {
    loadDatabase(function (result) {
        $("#flowdogshop-carousel").html(buildFlowdogshopCarousel(result));
    });
});

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

function loadDatabase(doneFunction) {
    var req = new XMLHttpRequest();
    req.open("GET", "https://flowdogs.github.io/data/board-database.xlsx", true);
    req.responseType = "arraybuffer";

    req.onload = function (e) {
        var result;
        var data = new Uint8Array(req.response);
        var workbook = XLSX.read(data, {
            type: "array"
        });

        workbook.SheetNames.forEach(function (y) {
            result = XLSX.utils.sheet_to_json(workbook.Sheets[y]);
        });

        doneFunction(result);
    };
    req.send();
}

function buildFlowdogshopCarousel(results) {
    var flowdogshopHtml = "";

    var displayResults = $.grep(results, function (result) {
        return result.Display === "YES";
    });

    displayResults.forEach(function (result) {
        if (result.ImageBack) {
            flowdogshopHtml += 
                `<div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="img-container" onclick="orderNow('${result.Title} - ${result.Price}')">
                        <img src="images/flowdogshop/${result.ImageFront}" class="img-fluid" alt="${result.Description}">
                        <div class="img-overlay">
                            <img src="images/flowdogshop/${result.ImageBack}" class="img-fluid" alt="${result.Description}">
                        </div>
                        <div class="text-overlay">
                            Order now
                        </div>
                    </div>
                </div>`;
        } else {
            flowdogshopHtml += 
                `<div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="img-container" onclick="orderNow('${result.Title} - ${result.Price}')">
                        <img src="images/flowdogshop/${result.ImageFront}" class="img-fluid" alt="${result.Description}">
                        <div class="text-overlay">
                            Order now
                        </div>
                    </div>
                </div>`;
        }
    });

    return flowdogshopHtml;
}