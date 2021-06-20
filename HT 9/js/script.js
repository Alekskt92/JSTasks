// Task 1
    let x = 10;
    let y = 7;

    (x > y) ? alert('х больше, чем у') : alert('х меньше, чем у');

// Task 2
    let num = Number(prompt('Введите ваше числло'));

    if (num % 2 === 0) {
        alert(`Число ${num} четное`);
    } else {
        alert(`Число ${num} нечетное`);
    }

// Task 3
    let number = prompt('Введите ваше число');
    let numType;

    if (number % 1 !== 0) {
        alert('Это не целое число. Попробуйте еще раз');
    }

    if (number > 0 && number < 10) {
        numType = 'однозначное положительное';
    } else if ( number >= 10 && number < 100) {
        numType = 'двухзначное положительное';
    } else if (number >= 100 && number <1000) {
        numType = 'трехзначное положительное';
    } else if (number >= 1000) {
        numType = 'многозначное положительное';
    }

    alert(`Число ${number} ${numType}. Количество цифр: ${number.length}`);

// Task 4
    let a = Number(prompt('Введите первое число'));
    let b = Number(prompt('Введите второе число'));
    let c = Number(prompt('Введите третье число'));

    if (a > b && a > c) {
        alert(`Наибольшее число: ${a}`);
    } else if (b > a && b > c) {
        alert(`Наибольшее число: ${b}`);
    } else {
        alert(`Наибольшее число: ${c}`);
    }

// Task 5
    let edge1 = Number(prompt('Введите первую сторону треугольника'));
    let edge2 = Number(prompt('Введите вторую сторону треугольника'));
    let edge3 = Number(prompt('Введите третью сторону треугольника'));

    if (edge1 + edge2 > edge3 && edge2 + edge3 > edge1 && edge1 + edge3 > edge2) {
        alert('Такой трегуольник может существовать');
    } else {
        alert('Такой треугольник не может существовать');
    }