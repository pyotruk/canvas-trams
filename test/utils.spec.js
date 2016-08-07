describe('utils', function () {

    it('Test affine transforms', function () {
        var point = __utils__.affine(
            {x: 2, y: 42},
            [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1]
            ]
        );
        expect(point.x).toEqual(2);
        expect(point.y).toEqual(42);

        point = __utils__.affine(
            {x: 2, y: 42},
            [
                [1, 0, 0],
                [0, -1, 0],
                [0, 0, 1]
            ]
        );
        expect(point.x).toEqual(2);
        expect(point.y).toEqual(-42);

        point = __utils__.affine(
            {x: 2, y: 42},
            [
                [1, 0, 2],
                [0, 1, -2],
                [0, 0, 1]
            ]
        );
        expect(point.x).toEqual(4);
        expect(point.y).toEqual(40);
    });

    it('Test normalizePolar()', function () {
        var eps = 0.1;

        var point = __utils__.normalizePolar({r: 1, fi: 1}, eps);
        expect(point.r).toEqual(1);
        expect(point.fi).toEqual(1);

        point = __utils__.normalizePolar({r: -1, fi: Math.PI}, eps);
        expect(point.r).toEqual(1);
        expect(point.fi).toEqual(0);

        point = __utils__.normalizePolar({r: -1.42, fi: 2 * Math.PI}, eps);
        expect(point.r).toEqual(1.42);
        expect(point.fi).toEqual(Math.PI);

        point = __utils__.normalizePolar({r: eps / 10, fi: 2 * Math.PI}, eps);
        expect(point.r).toEqual(0);
        expect(point.fi).toEqual(0);

        point = __utils__.normalizePolar({r: -eps / 10, fi: 2 * Math.PI}, eps);
        expect(point.r).toEqual(0);
        expect(point.fi).toEqual(0);
    });

});