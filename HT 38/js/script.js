    'use strict'

    const cache = new Map();

    function salaryScale(value, k){
        return value * k;
    }

    function saveCache(func) {
        return (...args) => {
            for (let count of cache.keys()) {
                if (count.every((item, index) => item === args[index])) {
                    return cache.get(args);
                }
            }

            if (cache.size >= 10) {
                const elem = [...cache.keys()].shift();
                cache.delete(elem);
            }

            const result = func(...args);
            cache.set(args, result);
            return result;
        };
    }


    const getResult = saveCache(salaryScale);
    getResult(15000, 2);
    getResult(15000, 3);
    getResult(15000, 4);
    getResult(15000, 5);
    getResult(15000, 6);
    getResult(15000, 7);
    getResult(15000, 7);
    getResult(15000, 8);
    getResult(15000, 9);
    getResult(15000, 10);
    getResult(15000, 11);
    getResult(15000, 12);
    getResult(15000, 13);
    console.log(cache);