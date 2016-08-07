/**
 * Point in polar coordinates.
 */

var Point = function (r, fi) {
    var self = this;

    const EPS = __config__.point.equalsEps;
    const AFFINE_MATRIX = __config__.canvas.affineMatrix;

    self.r = r;
    self.fi = fi;

    __utils__.normalizePolar(self, EPS);

    self.equals = function (point) {
        return __utils__.arePointsEqual(self, point, EPS);
    };

    self.toString = function () {
        return '[' + self.r + ',' + self.fi + ']';
    };

    self.toCanvasCoordinates = function () {
        var canvasPoint = __utils__.polarToCartesian(self);
        canvasPoint = __utils__.affine(canvasPoint, AFFINE_MATRIX);
        return canvasPoint;
    };
};