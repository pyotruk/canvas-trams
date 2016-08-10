var Painter = function (ctx) {
    var self = this;

    const CANVAS_SIZE = __config__.canvas.size;
    var currentPos = __config__.canvas.center;

    ctx.moveTo(currentPos.x, currentPos.y);

    var paintNode = function (point) {
        ctx.fillStyle = __config__.canvas.stops.color;
        PainterUtils.fillCircle(ctx, point.x, point.y, __config__.canvas.stops.radius);
        ctx.moveTo(currentPos.x, currentPos.y);
    };

    var paintEdge = function (point) {
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
        currentPos = point;
    };

    var paintRoute = function (route) {
        var point = route.nodes[0].toCanvasCoordinates();
        ctx.moveTo(point.x, point.y);

        ctx.beginPath();

        for (var i in route.nodes) {
            if (!route.nodes.hasOwnProperty(i)) continue;

            point = route.nodes[i].toCanvasCoordinates();

            paintEdge(point);
            paintNode(point);
        }

        ctx.closePath();
    };

    var paintTram = function (tram) {
        var point = tram.currentPos.toCanvasCoordinates();

        ctx.fillStyle = tram.color;
        PainterUtils.fillCircle(ctx, point.x, point.y, __config__.canvas.trams.radius);
        ctx.moveTo(point.x, point.y);
    };

    self.repaint = function (trams) {
        PainterUtils.clearAll(ctx, CANVAS_SIZE.w, CANVAS_SIZE.h);

        for (var i in trams) {
            if (!trams.hasOwnProperty(i)) continue;

            var tram = trams[i];
            paintRoute(tram.route);
            paintTram(tram);
        }
    };
};