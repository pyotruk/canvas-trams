var Tram = function (tramData) {
    var self = this;

    const EPS = __config__.point.equalsEps;

    self.id = tramData.id;
    self.color = tramData.color;
    self.passengers = tramData.passengers;

    var frozen = false;

    self.route = new Route(self.id, tramData.route.map(function (point) {
        return new Point(point.r, point.fi);
    }));

    self.currentPos = self.route.getFirstStop();

    self.toString = function () {
        return 'Tram#' + self.id + '{pos=' + self.currentPos + '}';
    };

    self.setFrozen = function (f) {
        frozen = f;
    };

    self.isFrozen = function () {
        return frozen;
    };

    self.move = function () {
        if (frozen) return;
        self.currentPos = self.route.move(self.currentPos);
    };

    self.isNextSemaphore = function () {
        var nextStop = self.route.findNextStop(self.currentPos);
        if (!nextStop) throw new Error('Illegal state: next stop not found.');
        return PointUtils.isPole(nextStop, EPS);
    };

    self.isStop = function () {
        var stopIndex = self.route.currentStopIndex(self.currentPos);
        if (stopIndex > -1) {
            console.log(self + ' >> STOP reached.');
            return true;
        }
        return false;
    }
};