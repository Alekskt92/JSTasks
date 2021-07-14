// indexOf
   /* function indexOf(array, element) {
        for (let i = 0; i < array.length; i++) {
            if (element === array[i]) return i;
        }

        return -1;
    }

    let exampleArr = [1, 2, 3, 4, 5, 6];
    console.log(indexOf(exampleArr, 5));
    console.log(indexOf(exampleArr, 3));
    console.log(indexOf(exampleArr, 9));*/

// lastIndexOf
    /*function lastIndexOf(array, element) {
        for (let i = array.length; i >= 0; i--) {
            if (array[i] === element) return i;
        }

        return - 1;
    }

    let exampleArr = [1, 2, 3, 4, 5, 6];
    console.log(lastIndexOf(exampleArr, 4));
    console.log(lastIndexOf(exampleArr, 6));
    console.log(lastIndexOf(exampleArr, 10));*/

// find
    /*function find(array, callback) {
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i], i, array)) return array[i];
        }

        return undefined;
    }

    let exampleArr = [1, 2, 3, 4, 5, 6];
    console.log(find(exampleArr, function(item, index, array) {
        return item % 2 === 0;
    }))

    console.log(find(exampleArr, function(item, index, array) {
        return item > 10;
    }))*/

// findIndex
    /*function findIndex(array, callback) {
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) return i;
        }

        return -1;
    }

    let exampleArr = [1, 2, 3, 4, 5, 6];
    console.log(findIndex(exampleArr, function(item, index, array) {
        return item % 2 === 0;
    }))

    console.log(findIndex(exampleArr, function(item, index, array) {
        return item > 10;
    }))*/

// includes
    /*function includes(array, element) {
        for (let i = 0; i < array.length; i++) {
            if (element === array[i]) return true;
        }

        return false;
    }

    let exampleArr = [1, 2, 3, 4, 5, 6];
    console.log(includes(exampleArr, 4));
    console.log(includes(exampleArr, 8));*/

// every
   /* function every(array, callback) {
        for (let i = 0; i < array.length; i++) {
            if (!callback(array[i])) return false;
        }

        return true;
    }

    let exampleArr = [1, 2, 3, 4, 5, 6];
    console.log(every(exampleArr, function(item, index, array) {
        return item > 0;
    }))

    console.log(every(exampleArr, function(item, index, array) {
        return item > 10;
    }))*/

// some
  /*  function some(array, callback) {
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) return true;
        }

        return false;
    }

    let exampleArr = [1, 2, 3, 4, 5, 6];
    console.log(some(exampleArr, function(item, index, array) {
        return item > 5;
    }))

    console.log(some(exampleArr, function (item, index, array) {
        return item > 10;
    }))

*/