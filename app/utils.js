var __utils__ = {
    polarToCartesian: function (polarPoint) {
        return {
            x: polarPoint.r * Math.cos(polarPoint.fi),
            y: polarPoint.r * Math.sin(polarPoint.fi)
        }
    },
    affine: function (point, matrix) {
        return {
            x: matrix[0][0] * point.x + matrix[0][1] * point.y + matrix[0][2] * 1,
            y: matrix[1][0] * point.x + matrix[1][1] * point.y + matrix[1][2] * 1
        }
    }
};