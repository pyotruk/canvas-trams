var __config__ = {
    trams: [
        {
            id: 'GREEN',
            color: '#009933',
            passengers: 42,
            route: [
                {r: 2.0, fi: Math.PI},
                {r: 1.0, fi: Math.PI},
                {r: 0.0, fi: 0.0},
                {r: 1.0, fi: 0.0},
                {r: 2.0, fi: 0.0}
            ]
        },
        {
            id: 'YELLOW',
            color: '#ffcc00',
            passengers: 16,
            route: [
                {r: 1.0, fi: 4 / 3 * Math.PI},
                {r: 0.0, fi: 0.0},
                {r: 1.0, fi: 1 / 3 * Math.PI},
                {r: 2.0, fi: 1 / 3 * Math.PI}
            ]
        },
        {
            id: 'RED',
            color: '#cc0000',
            passengers: 32,
            route: [
                {r: 1.0, fi: 5 / 3 * Math.PI},
                {r: 0.0, fi: 0.0},
                {r: 1.0, fi: 2 / 3 * Math.PI}
            ]
        }
    ],
    canvas: {
        fps: 20,
        size: {
            w: 500,
            h: 500
        },
        center: {
            x: 250,
            y: 250
        },
        affineMatrix: [
            [250 / 2 - 10, 0, 250],
            [0, -250 / 2 - 10, 250],
            [0, 0, 1]
        ],
        stops: {
            radius: 6,
            color: "#333"
        },
        trams: {
            radius: 10,
            frozenColor: '#3399ff'
        }
    },
    point: {
        equalsEps: 0.01,
        step: 0.05
    }
};
