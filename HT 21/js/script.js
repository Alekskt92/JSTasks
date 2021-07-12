// Task 1
   /* let arr = ['a', 'b', 'c', 'd'];
    alert(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`);*/

// Task 2
    /*let arr = [2, 5, 3, 9];

    function scale(array) {
        let n1 = array[0] * array[1];
        let n2 = array[2] * array[3];
        let result = n1 + n2;
        alert(result);
    }

    scale(arr);
*/

// Task 3
    /*let arr = [[1, 2, 3], [4, 5, 6], [7, 8 ,9]];
    alert(arr[1][0]);*/

// Task 4
   /* let obj = {
        js: ['jQuery', 'Angular'],
        php: 'hello',
        css: 'world'
    }

    alert(obj.js[0]);*/

// Task 5
    /*function symbolArr(symbol = 'x') {
        let count = Number(prompt('Введите количество элементов'));
        let arr = [];

        for (let i = 0; i < count; i++) {
            arr.push(symbol);
            symbol += 'x';
        }

        alert(arr);
    }

    symbolArr()*/

// Task 6
    /*function numArr() {
        let count = Number(prompt('Введите количество элементов'));
        let arr = [];

        for (let i = 1; i <= count; i++) {
            let num = '';

            for (let j = 0; j < i; j++) {
                num += i;
            }

            arr.push(num);
        }

        console.log(arr);
    }

    numArr()*/

// Task 7
    /*function arrayFill(sign, count) {
        let arr = [];

        for (let i = 0; i < count; i++) {
            arr.push(sign);
        }

        alert(arr);
    }

    arrayFill('xx', 7);
*/

// Task 8
   /* function sumCount(array) {
        let sum = 0;
        let count = 0;

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
            count++;

            if (sum > 10) break;
        }

         alert(`Количество элементов: ${count}`);
    }

    let exampleArr = [1, 4, 2, 3, 9];
    sumCount(exampleArr);*/

// Task 9
    /*function reverseArray(array) {
        let newArray = [];

        for (let i = 0; i < array.length; i++) {
            newArray[i] = array[(array.length - 1) - i];
        }

        return newArray;
    }

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(reverseArray(arr));
*/
// Task 10
   /* let arr = [[1, 2, 3], [4, 5], [6]];

    function sumArray(array) {
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                sum += arr[i][j];
            }
        }

        console.log(sum);
    }

    sumArray(arr);*/

// Task 11
    /*let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

    function sumArray(array) {
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                for (let k = 0; k < array[i][j].length; k++) {
                    sum += array[i][j][k];
                }
            }
        }

        console.log(sum);
    }

    sumArray(arr);*/
