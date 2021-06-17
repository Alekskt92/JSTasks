    let mathOperation = prompt('Введите математическую операцию');
    let firstNumber = Number(prompt('Введите первое число'));
    let secondNumber = Number(prompt('Введите второе число'));

    let sum = firstNumber + secondNumber;
    let diff = firstNumber - secondNumber;
    let scale = firstNumber * secondNumber;
    let div = firstNumber / secondNumber;
    
    if (mathOperation === 'add') {
        alert( `Результат ${firstNumber} + ${secondNumber} = ${sum}` );
    }

    if (mathOperation === 'sub') {
        alert( `Результат ${firstNumber} - ${secondNumber} = ${diff}` );
    }

    if (mathOperation === 'mult') {
        alert( `Результат ${firstNumber} * ${secondNumber} = ${scale}` );
    }

    if (mathOperation === 'div') {
        alert( `Результат ${firstNumber} / ${secondNumber} = ${div}` );
    }