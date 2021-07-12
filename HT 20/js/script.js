// 1
    /*let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];

    console.log(arr1.concat(arr2));*/

// 2
    /*let arr = [1, 2, 3];
    console.log(arr.reverse());*/

// 3
    /*let arr = [1, 2, 3];
    arr.push(4, 5, 6);

    console.log(arr);*/

// 4
   /* let arr = [1, 2, 3];
    arr.unshift(4, 5, 6);

    console.log(arr);*/

// 5
    /*let arr = ['js', 'css', 'jq'];
    console.log(arr[0]);*/

// 6
    /*let arr = ['js', 'css', 'jq'];
    console.log(arr[arr.length - 1]);*/

// 7
        /*let arr = [1, 2, 3, 4, 5];
        let newArr = arr.slice(0, 3);

        console.log(newArr);*/

// 8
   /* let arr = [1, 2, 3, 4, 5];
    let newArr = arr.slice(3, 5);

    console.log(newArr);*/

// 9
    /*let arr = [1, 2, 3, 4, 5];
    arr.splice(1, 2);

    console.log(arr);*/

// 10
    /*let arr = [1, 2, 3, 4, 5];
    let newArr = arr.splice(1, 3);
    console.log(newArr);*/

// 11
    /*let arr = [1, 2, 3, 4, 5];
    arr.splice(3, 0, 'a', 'b', 'c');

    console.log(arr);*/

// 12
   /* let arr = [1, 2, 3, 4, 5];
    arr.splice(1, 0, 'a', 'b');
    arr.splice(6, 0, 'c');
    arr.push('e');

    console.log(arr);*/

// 13
    /*let arr = [3, 4, 1, 2, 7];
    arr.sort();

    console.log(arr);*/

// 14
   /* let arr = [5, 6, 7, 8, 9];
    let sum = 0;

    arr.forEach(function(item, index, array) {
        sum += array[index];
    });

    console.log(sum);*/

// 15
    /*let arr = [5, 6, 7, 8, 9];

    arr.forEach(function(item, index, array) {
        array[index] = array[index] ** 2;
    })

    console.log(arr);*/

// 16
    /*let arr = [1, -3, 5, 6, -7, 8, 9, -11];

    function negativeNums(value) {
        return value < 0;
    }

    console.log(arr.filter(negativeNums));*/

// 17
   /* let arr = [1, -3, 5, 6, -7, 8, 9, -11];

    function rightNums(value) {
        if (value % 2 === 0) return value;
    }

    console.log(arr.filter(rightNums));*/

// 18
    /*let arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];

    function rightStrings(string) {
        if (string.length > 5) return string;
    }

    console.log(arr.filter(rightStrings));*/

// 19
    /*let arr = [1, 2, [3, 4], 5, [6, 7]];

    function sortArray(value) {
        if (Array.isArray(value)) return value;
    }

    console.log(arr.filter(sortArray));*/

// 20
    /*let arr = [5, -3, 6, -5, 0, -7, 8, 9];
    let count = 0;

    arr.forEach(function(item, index, array) {
        if (array[index] < 0) count++;
    })

    console.log(count);*/