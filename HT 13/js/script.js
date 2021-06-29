    function numDegree(num, degree = 1) {
        if (isNaN(num) || isNaN(degree)) {
            alert('Ваши данные неверные');
        } else {
            let result = num ** degree;
            alert(`Результат операции: ${result}`);
        }
    }

    let num = Number(prompt('Введите ваше число'));
    let degree = Number(prompt('Ввевите степень числа'));
    numDegree(num, degree);