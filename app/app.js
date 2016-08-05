document.addEventListener("DOMContentLoaded", function () {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var painter = new Painter(ctx);

    var trams = __config__.routes.map(function (route) {
        return new Tram(
            new Route(route.map(function (point) {
                return new Point(point.r, point.fi);
            })),
            function () {
                painter.repaint(trams);
            }
        );
    });

    console.log('Init finished.');

    // TODO
    trams[0].moveNext();
});