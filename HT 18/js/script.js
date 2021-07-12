    function yearDate() {
        let year = Number(prompt('Введите возраст'));
        if (isNaN(year)) alert('Введен неправильный возраст');

        if (year % 5 === 0) alert(`Вам ${year} лет`);
        if (year >= 11 && year < 20) alert(`Вам ${year} лет`);
        if (year > 100 && year % 100 === 11 || year % 100 === 12 || year % 100 === 13 || year % 100 === 14) alert(`Вам ${year} лет`);
        if (year % 10 >= 5) alert(`Вам ${year} лет`);
        if (year % 10 === 1) alert(`Вам ${year} год`);
        if (year % 10 >= 2 && year % 10 < 5) alert(`Вам ${year} года`);
    }

    yearDate()