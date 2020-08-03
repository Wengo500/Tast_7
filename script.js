const car = {
    maxSpeed: 240,
    weight: 1500,
    color: 'Red',

    door: {
        weight: 7,

        wheel: {
            weight: 10,

            tire: {
                color: 'black,',
                weight: 5,

                protector: {
                    height: 6,
                },
            },
        },
    },
};

const bicycle = {
    maxSpeed: 40,
    weight: 15,
    color: 'Red',

    door: {
        weight: 7,

        wheel: {
            weight: 2,

            tire: {
                color: 'black,',
                weight: 5,

                protector: {
                    height: 6,
                },
            },
        },
    },
};

const maxDepth = (object) => {
    let depth = 0;
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            if (object[key] !== null && typeof object[key] === 'object') {

                depth = maxDepth(object[key]);
                depth++;
            }
        }
    }
    return depth;
};

console.log(maxDepth(car));


const objDifferences = (o1, o2) => {
    let diff = 0;
    const objTest = (obj1, obj2) => {

        for (const key in obj1) {
            if (obj1.hasOwnProperty(key)) {
                if (Object.keys(obj1).length === Object.keys(obj2).length) {

                    if (obj1[key] !== null && typeof obj1[key] === 'object') {

                        objTest(obj1[key], obj2[key]);
                    } else if (obj1[key] !== obj2[key]) {
                        diff++;
                    };
                } else {
                    console.log('Different object length ');
                }
            };
        };
    };
    objTest(o1, o2);
    console.log(diff);
    return diff
};

objDifferences(car, bicycle);