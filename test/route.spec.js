describe('route', function () {

    it('Test direction change when the end reached', function () {
        var route = new Route(42, [
            new Point(1, Math.PI),
            new Point(1, 0)
        ]);
        expect(route.getVelocityDirection()).toEqual(-1);

        var newPos = route.move(new Point(0, 0));
        expect(route.getVelocityDirection()).toEqual(-1);
        expect(newPos.r).toEqual(route.getStep());
        expect(newPos.fi).toEqual(Math.PI);

        newPos = route.move(new Point(1, Math.PI));
        expect(route.getVelocityDirection()).toEqual(-1);
        expect(newPos.r).toEqual(1 - route.getStep());
        expect(newPos.fi).toEqual(Math.PI);

        newPos = route.move(new Point(2, 0));
        expect(route.getVelocityDirection()).toEqual(1);
        expect(newPos.r).toEqual(1);
        expect(newPos.fi).toEqual(0);

        newPos = route.move(new Point(0.5, 0));
        expect(route.getVelocityDirection()).toEqual(1);
        expect(newPos.r).toEqual(0.5 + route.getStep());
        expect(newPos.fi).toEqual(0);

    });

    it('Test direction change when the pole crossed', function () {
        var route = new Route(42, [
            new Point(1, Math.PI),
            new Point(1, 0)
        ]);
        expect(route.getVelocityDirection()).toEqual(-1);

        var newPos = route.move(new Point(1, 0));
        expect(route.getVelocityDirection()).toEqual(-1);
        expect(newPos.r).toEqual(1 - route.getStep());
        expect(newPos.fi).toEqual(0);

        newPos = route.move(new Point(route.getStep(), 0));
        expect(route.getVelocityDirection()).toEqual(1);
        expect(newPos.r).toEqual(0);
        expect(newPos.fi).toEqual(Math.PI);
    });

    it('Test findNextStop()', function () {
        var route = new Route(42, [
            new Point(1, Math.PI),
            new Point(0, 0),
            new Point(1, 0)
        ]);

        var nextStop = route.findNextStop(new Point(1, Math.PI));
        expect(nextStop.r).toEqual(0);
        expect(nextStop.fi).toEqual(0);

        nextStop = route.findNextStop(new Point(0.9, Math.PI));
        expect(nextStop.r).toEqual(0);
        expect(nextStop.fi).toEqual(0);

        nextStop = route.findNextStop(new Point(0, 0));
        expect(nextStop.r).toEqual(1);
        expect(nextStop.fi).toEqual(0);
    });

    it('Test findPrevStop()', function () {
        var route = new Route(42, [
            new Point(1, Math.PI),
            new Point(0, 0),
            new Point(1, 0)
        ]);

        var prevStop = route.findPrevStop(new Point(1, Math.PI));
        expect(prevStop.r).toEqual(1);
        expect(prevStop.fi).toEqual(Math.PI);

        prevStop = route.findPrevStop(new Point(0.6, 0));
        expect(prevStop.r).toEqual(0);
        expect(prevStop.fi).toEqual(0);

        prevStop = route.findPrevStop(new Point(0, 0));
        expect(prevStop.r).toEqual(1);
        expect(prevStop.fi).toEqual(Math.PI);
    });

    it('Test currentStopIndex()', function () {
        var route = new Route(42, [
            new Point(1, Math.PI),
            new Point(0, 0),
            new Point(1, 0)
        ]);

        var stopIndex = route.currentStopIndex(new Point(1, Math.PI));
        expect(stopIndex).toEqual(0);

        stopIndex = route.currentStopIndex(new Point(0.9, Math.PI));
        expect(stopIndex).toEqual(-1);

        stopIndex = route.currentStopIndex(new Point(0, 0));
        expect(stopIndex).toEqual(1);

        stopIndex = route.currentStopIndex(new Point(1, 0));
        expect(stopIndex).toEqual(2);
    })

});