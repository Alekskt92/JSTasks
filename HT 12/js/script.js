    let num = Number(prompt('Введите ваше число'));

    if (isNaN(num)) {
        alert(NaN);
    } else if (num < 1) {
        alert(NaN);
    } else if (num === 1 || num === 2) {
        alert('Ваше число простое');
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                alert(`Наименьший делитель числа: ${i}`);
                break;
            }
        }
    }
