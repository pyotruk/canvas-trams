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

    self.id = id;
    self.nodes = nodes;

    self.toString = function () {
        return 'Route#' + self.id;
    };

    self.getFirstStop = function () {
        return self.nodes[0];
    };

    self.getNextPoint = function (currentPos) {
        return new Point(
            currentPos.r + STEP,
            currentPos.fi
        );
    };

    self.isStop = function (currentPos) {
        for (var i in self.nodes) {
            if (self.nodes.hasOwnProperty(i) &&
                self.nodes[i].equals(currentPos)) {
                return true;
            }
        }
        return false;
    }
};