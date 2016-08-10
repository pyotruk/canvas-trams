var PainterUtils = {

    fillCircle: function (ctx, x, y, radius) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    },

    clearAll: function (ctx, w, h) {
        ctx.clearRect(0, 0, w, h);
    }
};