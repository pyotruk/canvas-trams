var PainterUtils = {

    fillCircle: function (ctx, x, y, radius) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fill();
    },

    clearAll: function (ctx, w, h) {
        ctx.clearRect(0, 0, 500, 500);
    }
};