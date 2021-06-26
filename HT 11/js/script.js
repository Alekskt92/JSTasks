    let number = Number(prompt('Введите ваше число'));

    if (isNaN(number)) {
        console.log(false);
    } else if (number <= 1) {
        console.log(false);
    } else if (number === 2 || number === 3) {
        console.log(true);
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                console.log(false);
                break;
            } else {
                console.log(true);
            }
        }
    }



