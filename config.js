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
            passengers: 42,
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
            passengers: 42,
            route: [
                {r: 1.0, fi: 5 / 3 * Math.PI},
                {r: 0.0, fi: 0.0},
                {r: 1.0, fi: 2 / 3 * Math.PI}
            ]
        }
    ],
    canvas: {
        affineMatrix: [
            [250 / 2 - 10, 0, 250],
            [0, -250 / 2 - 10, 250],
            [0, 0, 1]
        ],
        center: {
            x: 250,
            y: 250
        },
        stops: {
            radius: 6,
            color: "#333"
        },
        trams: {
            radius: 10
        }
    },
    point: {
        equalsEps: 0.01
    }
};
