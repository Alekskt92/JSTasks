    function isPalindrome(num) {
        let numConverted = num.toString();
        if (numConverted.length ===1) return true;

        for (let i = 0; i < numConverted.length / 2; i++) {
            if (numConverted[i] !== numConverted[numConverted.length - 1 - i]) {
                return false;
            }
            return true;
        }
    }

    function palindrome(num, step=0) {
        num = num.toString();
        let answer = {};

        if(isPalindrome(num)) {
            answer.result = num;
            answer.stepCount = step;
            return answer;
        }

        answer.stepCount = answer.stepCount + 1;
        let number = Number(num);
        let numReversed = Number(num.split("").reverse().join(""));
        let sum = number + numReversed;
        return palindrome(sum, ++step);
    }

    console.log(palindrome(139));
    console.log(palindrome(456));
    console.log(palindrome(72));