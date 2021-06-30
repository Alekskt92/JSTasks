    function numDegree(num, degree) {
        if (isNaN(num) || isNaN(degree)) {
            return 'Ваши данные неверные';
        } else {
           return num ** degree;
        }
    }

    let num = Number(prompt('Введите ваше число'));
    let degree = Number(prompt('Ввевите степень числа'));

    const result = numDegree(num, degree);
    alert(`Результат операции: ${result}`);