document.addEventListener("DOMContentLoaded", function () {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var painter = new Painter(ctx);

    var trams = __config__.trams.map(function (tram) {
        return new Tram(
            tram,
            function () {
                painter.repaint(trams);
            }
        );
    });

    painter.repaint(trams);
    console.log('Init finished.');

    // TODO Dispacther
    trams[0].moveNext();
    trams[1].moveNext();
    trams[2].moveNext();
});