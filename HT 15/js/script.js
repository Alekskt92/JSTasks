    function newArray(array) {
        const exampleArray = [];

        if (array.length === 0) return 'Массив пустой';

        for (let i = 0; i <= array.length; i++) {
            if (array[i] >= 0) exampleArray.push(array[i]);
        }

        if (exampleArray.length === 0) return null;

        return exampleArray;
    }

    const array = [1, 2, 3, -1, -2, -3];
    alert(newArray(array));