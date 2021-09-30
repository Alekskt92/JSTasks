    'use strict';

    let user = {
        data: {
            a: 1,
            b: 2,
            c: 3,
            d: {
                a1: 1,
                b1: 2,
                c1: 3,
                d1: {
                    a2: 3,
                    b2: 3,
                    c2: 3,
                }
            },
        }
    }


    function deepFreeze(obj){
        const properties = Object.getOwnPropertyNames(obj);

        properties.forEach((item) => {
            const attributes = obj[item];
            if(typeof attributes === 'object' && attributes !== null && !Array.isArray(attributes)){
                deepFreeze(attributes);
            }

            return Object.freeze(obj);
        });
    }

    deepFreeze(user);

    console.log(Object.isFrozen(user));
    console.log(Object.isFrozen(user.data));
    console.log(Object.isFrozen(user.data.d));
    console.log(Object.isFrozen(user.data.d.d1));