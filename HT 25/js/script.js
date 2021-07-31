    function sum() {
        let result = 0;

        return function(enlarger) {
            return result += enlarger;
        }
    }

    let growingSum = sum();

    console.log(growingSum(3));
    console.log(growingSum(10));
    console.log(growingSum(50));