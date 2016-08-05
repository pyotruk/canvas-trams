var __utils__ = {
    polarToCartesian: function (polarPoint) {
        return {
            x: polarPoint.r * Math.cos(polarPoint.fi),
            y: polarPoint.r * Math.sin(polarPoint.fi)
        }
    }
};