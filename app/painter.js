var Painter = function (ctx) {
    var self = this;

    var currentPos = __config__.canvas.center;

    ctx.moveTo(currentPos.x, currentPos.y);

    var paintNode = function (point) {
        ctx.fillStyle = __config__.canvas.stops.color;
        ctx.beginPath();
        ctx.arc(point.x, point.y, __config__.canvas.stops.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.moveTo(currentPos.x, currentPos.y);

        console.log('Painter >> node painted: [' + point.x + ', ' + point.y + ']');
    };

    var paintEdge = function (point) {
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
        currentPos = point;

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
        var point = tram.currentPos.toCanvasCoordinates();

        ctx.fillStyle = __config__.canvas.trams.color;
        ctx.beginPath();
        ctx.arc(point.x, point.y, __config__.canvas.trams.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.moveTo(currentPos.x, currentPos.y);

        console.log('Painter >> tram painted: ' + tram);
    };

    self.repaint = function (trams) {
        for (var i in trams) {
            if (!trams.hasOwnProperty(i)) continue;

            var tram = trams[i];
            paintRoute(tram.route);
            paintTram(tram);
        }
    };
};