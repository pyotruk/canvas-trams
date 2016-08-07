/**
 * Point in polar coordinates.
 */

var Point = function (r, fi) {
    var self = this;

    const EPS = 0.11;
    const AFFINE_MATRIX = [
        [250/2, 0, 250],
        [0, -250/2, 250],
        [0, 0, 1]
    ];

    self.r = r;
    self.fi = fi;

    self.equals = function (point) {
        return (Math.abs(self.r - point.r) < EPS) &&
            (Math.abs(self.fi - point.fi) < EPS);
    };

    self.toString = function () {
        return '[' + self.r + ',' + self.fi + ']';
    };
    
    self.toCanvasCoordinates = function () {
        var canvasPoint = __utils__.polarToCartesian(self);
        canvasPoint = __utils__.affine(canvasPoint, AFFINE_MATRIX);
        return canvasPoint;
    }
};