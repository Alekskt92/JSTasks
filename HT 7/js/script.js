    let a = Number(prompt('Введите число а'));
    let b = Number(prompt('Введите число b'));

    /*(a == 0) ? alert('Верно') : alert('Неверно'); //1
    (a > 0) ? alert('Верно') : alert('Неверно'); //2
    (a < 0) ? alert('Верно') : alert('Неверно'); //3
    (a >= 0) ? alert('Верно') : alert('Неверно'); //4
    (a <= 0) ? alert('Верно') : alert('Неверно'); //5
    (a !== 0) ? alert('Верно') : alert('Неверно'); //6
    (a === 'test') ? alert('Верно') : alert('Неверно'); //7
    (a === '1') ? alert('Верно') : alert('Неверно'); //8
    (a > 0 && a < 5) ? alert('Верно') : alert('Неверно'); //9*/

    (a == 0 || a == 2) ? a += 7 : a /= 10; //10
    alert(a);

    let sum = a + b;
    let diff = a - b;

    (a <= 1 && b >= 3) ? alert(`Сумма: ${a} + ${b} = ${sum}`) : alert(`Разность: ${a} - ${b} = ${diff}`); // 11


    (a > 2 && a < 11 || b >= 6 && b < 14) ? alert('Верно') : alert('Неверно'); //12

    let num = prompt('Введите число от 1 до 4');
    let result;

    switch (num) { //13
        case '1':
            result = 'Зима';
            break;
        case '2':
            result = 'Весна';
            break;
        case '3':
            result = 'Лето';
            break;
        case '4':
            result = 'Осень';
            break;
        default:
            alert('Вы ввели неправильное значение. Попробуйте еще раз');
    }



