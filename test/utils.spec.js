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

});