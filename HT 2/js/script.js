    let num1 = prompt('Введите первое число');
    let num2 = prompt('Введите второе число');

    let n1 = Number(num1);
    let n2 = Number(num2);

    let sum = n1 + n2;
    let diff = n1 - n2;
    let scale = n1 * n2;
    let div = n1 / n2;

    console.log(`Результат сложения: ${n1} + ${n2} = ${sum}`);
    console.log(`Результат вычитания: ${n1} - ${n2} = ${diff}`);
    console.log(`Результат умножения: ${n1} * ${n2} = ${scale}`);
    console.log(`Результат деления: ${n1} : ${n2} = ${div}`);