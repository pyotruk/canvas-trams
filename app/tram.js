var Tram = function (route, repaint) {
    var self = this;

    const STEP = 100; // msec

    self.route = route;
    self.currentPos = route.getFirstStop();

    self.moveNext = function () {
        var interval = setInterval(function () {

            self.currentPos = self.route.getNextPoint(self.currentPos);
            console.log('Tram >> current pos ' + self.currentPos.toString());

            repaint();

            if (self.route.isStop(self.currentPos)) {
                clearInterval(interval);
                console.log('Tram >> stopped at pos ' + self.currentPos.toString());
            }

        }, STEP);
    }
};