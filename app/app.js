document.addEventListener("DOMContentLoaded", function () {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var painter = new Painter(ctx);
    var semaphore = new Semaphore();

    var trams = __config__.trams.map(function (tram) {
        return new Tram(tram);
    });

    painter.repaint(trams);
    console.log('Init finished.');

    setInterval(function () {
        semaphore.checkTrams(trams);
        trams.forEach(function (tram) {
            tram.move();
        });
        painter.repaint(trams);
    }, 100);

});