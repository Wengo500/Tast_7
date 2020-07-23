const car = {
    maxSpeed: 240,
    weight: 1500,
    color: 'Red',

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
};

const bicycle = {
    maxSpeed: 40,
    weight: 16,
    color: 'Red',

    wheel: {
        weight: 2,

        tire: {
            color: 'black,',
            weight: 1,

            protector: {
                height: 5,
            },
        },
    },
};

const maxDepth = (object, values) => {

    if (typeof object !== "object" || object === null) {
        return 0;
    };

    values = Object.values(object);
    return (Math.max(...values.map(value => maxDepth(value)))) + 1;

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
                    break;
                }


            };
        };
    };
    objTest(o1, o2);
    console.log(diff);
    return diff
};

objDifferences(car, bicycle);