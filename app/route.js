/**
 * Tram route.
 * Routes is edge of the graph.
 *
 * @param id
 * @param nodes {Array}
 */

var Route = function (id, nodes) {
    var self = this;

    const STEP = 0.1;
    const EPS = __config__.point.equalsEps;

    self.id = id;
    self.nodes = nodes;

    var velocityDirection = -1;
    var indexDirection = 1;

    self.toString = function () {
        return 'Route#' + self.id;
    };

    self.getFirstStop = function () {
        return self.nodes[0];
    };

    self.getStep = function () {
        return STEP;
    };

    self.getVelocityDirection = function () {
        return velocityDirection;
    };

    var adjustToEnd = function (currentPos) {
        return PointUtils.adjustToNearestEndOfLine(
            currentPos,
            self.nodes[0],
            self.nodes[self.nodes.length - 1],
            EPS
        );
    };

    var isOutside = function (currentPos) {
        return !PointUtils.isPolarPointBelongsToLine(
            currentPos,
            self.nodes[0],
            self.nodes[self.nodes.length - 1],
            EPS
        );
    };

    self.move = function (currentPos) {
        var newPos = new Point(
            currentPos.r + velocityDirection * STEP,
            currentPos.fi
        );
        if (isOutside(newPos)) {
            velocityDirection = -1 * velocityDirection;
            indexDirection = -1 * indexDirection;
            newPos = adjustToEnd(newPos);
            console.log(self + ' >> END reached >> velocityDirection changed to [' + velocityDirection + '].');
        }
        if (PointUtils.isPole(newPos, EPS)) {
            velocityDirection = -1 * velocityDirection;
            newPos.handlePoleCross();
            console.log(self + ' >> POLE reached >> velocityDirection changed to [' + velocityDirection + '].');
        }
        return newPos;
    };

    /**
     * @param currentPos
     * @returns number - current stop`s index or -1 if we have not yet reached the stop
     */
    self.isStop = function (currentPos) {
        for (var i in self.nodes) {
            if (self.nodes.hasOwnProperty(i) &&
                self.nodes[i].equals(currentPos)) {
                return parseInt(i);
            }
        }
        return -1;
    };

    self.findNextStop = function (currentPos) {
        var currentStopIndex = PointUtils.findNearestLinePointIndex(currentPos, self.nodes, EPS);
        if (currentStopIndex < 0) return null;

        var distanceBetweenStops = 1; // TODO to config.js
        var nextStopIndex = currentStopIndex + indexDirection * distanceBetweenStops;

        if (nextStopIndex < 0) nextStopIndex = 0;
        if (nextStopIndex >= self.nodes.length) nextStopIndex = self.nodes.length - 1;

        return self.nodes[nextStopIndex];
    };

};