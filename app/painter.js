var Painter = function (ctx) {
    var self = this;

    ctx.moveTo(250, 250); // TODO move center coordinates in config

    var paintNode = function (node) {
        var point = __utils__.polarToCartesian(node);
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
    };

    var paintRoute = function (route) {
        for (var i in route.nodes) {
            if (!route.nodes.hasOwnProperty(i)) continue;

            paintNode(route.nodes[i]);
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