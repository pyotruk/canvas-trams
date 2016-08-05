/**
 * Tram route.
 * Routes is edge of the graph.
 *
 * @param nodes {Array}
 */

var Route = function (nodes) {
    var self = this;

    const STEP = 0.1;

    self.nodes = nodes;

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