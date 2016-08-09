var Tram = function (tramData) {
    var self = this;

    self.id = tramData.id;
    self.passengers = tramData.passengers;

    self.route = new Route(self.id, tramData.route.map(function (point) {
        return new Point(point.r, point.fi);
    }));

    self.currentPos = self.route.getFirstStop();

    self.toString = function () {
        return 'Tram#' + self.id + '{pos=' + self.currentPos + '}';
    };

    self.move = function () {
        self.currentPos = self.route.move(self.currentPos);
        console.log(self + ' >> moved.');

        if (self.route.isStop(self.currentPos)) {
            console.log(self + ' >> STOP reached.');
        }
    }
};