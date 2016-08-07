var PointUtils = {

    polarToCartesian: function (polarPoint) {
        return {
            x: polarPoint.r * Math.cos(polarPoint.fi),
            y: polarPoint.r * Math.sin(polarPoint.fi)
        }
    },

    /**
     * Affine 2D-transform for cartesian point
     * @param point (cartesian)
     * @param matrix
     * @returns {{x: number, y: number}}
     */
    affine: function (point, matrix) {
        return {
            x: matrix[0][0] * point.x + matrix[0][1] * point.y + matrix[0][2] * 1,
            y: matrix[1][0] * point.x + matrix[1][1] * point.y + matrix[1][2] * 1
        }
    },

    /**
     * Checks is polar point are equal.
     * @param p1
     * @param p2
     * @param eps
     * @returns {boolean}
     */
    arePointsEqual: function (p1, p2, eps) {
        return (Math.abs(p1.r - p2.r) < eps) &&
            (Math.abs(p1.fi - p2.fi) < eps);
    },

    /**
     * Normalizes polar coordinates:
     * - handles r = 0 (sets angle to 0)
     * - handles r < 0 (converts to positive with phase shift).
     */
    normalizePolar: function (polarPoint, eps) {
        if (polarPoint.r > eps) return polarPoint;

        if (Math.abs(polarPoint.r) <= eps) {
            polarPoint.fi = 0;
            polarPoint.r = 0;

        } else if (polarPoint.r < 0) {
            polarPoint.r = Math.abs(polarPoint.r);
            polarPoint.fi += Math.PI;
            polarPoint.fi = polarPoint.fi % (2 * Math.PI);
        }

        return polarPoint;
    }
};