    function exponentiation(firstNum, secondNum) {
        let result = firstNum ** secondNum;
        alert(`Результат операции: ${result}`);
    }
    
    function multiply(firstNum, secondNum) {
        let mult = firstNum * secondNum;
        alert(`Результат операции: ${mult}`);
    }

    function division(firstNum, secondNum) {
        let div = firstNum / secondNum;
        alert(`Результат операции: ${div}`);
    }

    function modulo(firstNum, secondNum) {
        let mod = firstNum % secondNum;
        alert(`Результат операции: ${mod}`);
    }

    function mainFunction(callback) {
        let firstNum = Number(prompt('Введите первое число'));
        let secondNum = Number(prompt('Введите степень числа'));
        callback(firstNum, secondNum);
    }

    mainFunction(exponentiation);
    mainFunction(multiply);
    mainFunction(division);
    mainFunction(modulo);