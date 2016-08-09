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
        if (PointUtils.isPole(p1, eps) && PointUtils.isPole(p2, eps)) return true;

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
            polarPoint.r = 0;

        } else if (polarPoint.r < 0) {
            polarPoint.r = Math.abs(polarPoint.r);
            polarPoint.fi += Math.PI;
        }

        polarPoint.fi = polarPoint.fi % (2 * Math.PI);

        return polarPoint;
    },

    /**
     * Checks if point near the pole.
     * @param point [polar]
     * @param eps
     */
    isPole: function (point, eps) {
        return Math.abs(point.r) <= eps;
    },

    /**
     * Checks if point belong to line including ends.
     * It works for lines passed through pole only.
     * @param point [polar]
     * @param lineStart - point of line start [polar]
     * @param lineEnd - point of line end [polar]
     * @param eps
     */
    isPolarPointBelongsToLine: function (point, lineStart, lineEnd, eps) {
        if (PointUtils.isPole(point, eps)) return true;

        if (Math.abs(point.fi - lineStart.fi) <= eps) {
            return point.r <= lineStart.r;
        } else if (Math.abs(point.fi - lineEnd.fi) <= eps) {
            return point.r <= lineEnd.r;
        }
        return false;
    },

    /**
     * Sets point position to the nearest end (or start) of the line.
     */
    adjustToNearestEndOfLine: function (point, lineStart, lineEnd, eps) {
        if (Math.abs(point.fi - lineStart.fi) <= eps) {
            point.r = lineStart.r;
        } else if (Math.abs(point.fi - lineEnd.fi) <= eps) {
            point.r = lineEnd.r;
        }
        return point;
    },

    findNearestLinePointIndex: function (pos, linePoints) {
        var nearestIndex = -1;
        var minDist = 1e+6;

        for (var i in linePoints) {
            if (!linePoints.hasOwnProperty(i)) continue;

            var p = linePoints[i];
            var dist = Math.abs(p.r - pos.r);
            if (dist < minDist) {
                minDist = dist;
                nearestIndex = i;
            }
        }
        return parseInt(nearestIndex);
    }
};