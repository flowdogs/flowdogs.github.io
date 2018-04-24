
$(function () {
    var boardDatabase = new File([""], "./data/board-database.xlsx");
    console.error(boardDatabase);

    var reader = new FileReader();

    // reader.onload = function (e) {
    //     var data = e.target.result;
    //     var workbook = XLSX.read(data, {
    //         type: 'binary'
    //     });

    //     workbook.SheetNames.forEach(function (sheetName) {
    //         // Here is your object
    //         var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
    //         var json_object = JSON.stringify(XL_row_object);
    //         console.log(json_object);
    //     });
    // };

    // reader.onload = function(e) {
    //     var data = e.target.result;
    //     var cfb = XLS.CFB.read(data, {type: 'binary'});
    //     var wb = XLS.parse_xlscfb(cfb);
    //     // Loop Over Each Sheet
    //     wb.SheetNames.forEach(function(sheetName) {
    //         // Obtain The Current Row As CSV
    //         var sCSV = XLS.utils.make_csv(wb.Sheets[sheetName]);   
    //         var oJS = XLS.utils.sheet_to_row_object_array(wb.Sheets[sheetName]);   
    //         console.log(oJS)
    //     });
    // };

    // reader.onload = function (e) {
    //     var data = e.target.result;
    //     console.error(data);
    //     var result;
    //     var workbook = XLSX.read(data, { type: 'binary' });
        
    //     var sheet_name_list = workbook.SheetNames;
    //     sheet_name_list.forEach(function (y) { /* iterate through sheets */
    //         //Convert the cell value to Json
    //         var roa = XLSX.utils.sheet_to_json(workbook.Sheets[y]);
    //         if (roa.length > 0) {
    //             result = roa;
    //         }
    //     });
    //    //Get the first column first cell value
    //     alert(result[0].Column1);
    // };

    // reader.onloadend = function(evt) {
    //     if (evt.target.readyState == FileReader.DONE) {
    //         var data = $.csv.toObjects(evt.target.result);
    //         console.log(data); //data will be an array or objects, just like an ajax result
    //     }
    // }

    // reader.readAsBinaryString(boardDatabase);

    $.get("https://github.com/flowdogs/flowdogs.github.io/blob/master/data/board-database.xlsx?raw=true", function( data ) {
        console.error(data);
    });

    $("#flowdogshop-carousel").html(buildFlowdogshopCarousel);
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

function buildFlowdogshopCarousel() {
    return `<div class="col-lg-4 col-md-4 col-sm-12">
                <div class="img-container" onclick="orderNow('Board #1 - 400$')">
                    <img src="images/flowdogshop/board1.jpg" class="img-fluid" alt="Flow dog shop - Board 2">
                    <div class="text-overlay">
                        Order now
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="img-container" onclick="orderNow('Board #2 - 400$')">
                    <img src="images/flowdogshop/board2.jpg" class="img-fluid" alt="Flow dog shop - Board 2">
                    <div class="text-overlay">
                        Order now
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="img-container" onclick="orderNow('Learning Bodyboard - 350$')">
                    <img src="images/flowdogshop/flow-bodyboard.jpg" class="img-fluid" alt="Flow dog shop - Learning Bodyboard">
                    <div class="text-overlay">
                        Order now
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="img-container" onclick="orderNow('Pappy Board - 400$')">
                    <img src="images/flowdogshop/pappy-board.jpg" class="img-fluid" alt="Flow dog shop - Pappy Board">
                    <div class="text-overlay">
                        Order now
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="img-container" onclick="orderNow('Board #3 - 400$')">
                    <img src="images/flowdogshop/board3-back.jpg" class="img-fluid" alt="Flow dog shop - Board 3 back">
                    <div class="img-overlay">
                        <img src="images/flowdogshop/board3-front.jpg" class="img-fluid" alt="Flow dog shop - Board 3 front">
                    </div>
                    <div class="text-overlay">
                        Order now
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="img-container" onclick="orderNow('Jaypeak Winter Special Edition - 400$')">
                    <img src="images/flowdogshop/jaypeak-winter-flowdogs.jpg" class="img-fluid" alt="Flow dog shop - Jaypeak winter special edition">
                    <div class="text-overlay">
                        Order now
                    </div>
                </div>
            </div>`;
}