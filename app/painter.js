var Painter = function (ctx) {
    var self = this;

    ctx.moveTo(250, 250); // TODO move center coordinates in config

    var paintNode = function (point) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 6, 0 , 2*Math.PI);
        ctx.stroke();

        console.log('Painter >> node painted: [' + point.x + ', ' + point.y + ']');
    };

    var paintEdge = function (point) {
        ctx.lineTo(point.x, point.y);
        ctx.stroke();

        console.log('Painter >> edge painted: lineTo [' + point.x + ', ' + point.y + ']');
    };

    var paintRoute = function (route) {
        console.log('Painter >> ' + route);

        var point = route.nodes[0].toCanvasCoordinates();
        ctx.moveTo(point.x, point.y);

        for (var i in route.nodes) {
            if (!route.nodes.hasOwnProperty(i)) continue;

            point = route.nodes[i].toCanvasCoordinates();

            paintEdge(point);
            paintNode(point);
        }
    };

    var paintTram = function (tram) {

    };

    self.repaint = function (trams) {
        for (var i in trams) {
            if (!trams.hasOwnProperty(i)) continue;

            var tram = trams[i];
            paintRoute(tram.route);
            paintTram(tram.currentPos);
        }
    };
};