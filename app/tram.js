var Tram = function (tramData, repaint) {
    var self = this;

    const STEP = 100; // msec

    self.id = tramData.id;
    self.passengers = tramData.passengers;
    
    self.route = new Route(self.id, tramData.route.map(function (point) {
        return new Point(point.r, point.fi);
    }));

    self.currentPos = self.route.getFirstStop();

    self.toString = function () {
        return 'Tram#' + self.id;
    };

    self.moveNext = function () {
        var interval = setInterval(function () {

            self.currentPos = self.route.getNextPoint(self.currentPos);
            console.log(self + ' >> current pos ' + self.currentPos.toString());

            repaint();

            if (self.route.isStop(self.currentPos)) {
                clearInterval(interval);
                console.log(self + ' >> stopped at pos ' + self.currentPos.toString());
            }

        }, STEP);
    }
};