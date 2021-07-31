    function randomize(max = 100) {
        return Math.floor(Math.random() * max);
    }

    function randomArray() {
        let arr = [];
        let numCount = 0;

        function randomNumbers() {
            if(arr.length === 100) return {arr, numCount};
            ++numCount;

            const randoms = randomize();

            if(arr.includes(randoms)) return "Already exist";

            arr.push(randoms);

            return {
                num: randoms,
                arr,
                numCount
            };
        }

        return randomNumbers;
    }

    let result = randomArray();

    for(let i = 1; i <= 100; i++) {
        console.log(result());
    }