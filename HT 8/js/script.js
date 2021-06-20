    let date = Number(prompt('Введите ваш год рождения'));
    if (date === null) alert('Жаль, что вы не захотели вводить свою дату рождения');

    let city = prompt('В каком городе вы живете?');
    if (city === null) alert('Жаль, что вы не захотели ввести название своего города');

    let sport = prompt('Какой ваш любимый вид спорта?');
    if (sport === null) alert('Жаль, что вы не захотели ввести название любимого вида спорта');

    let actualAge = 2021 - date;
    let actualPlace;
    let sportMaster;

    switch (city) {
        case 'Киев':
            actualPlace = 'Ты живешь в столице Украины';
            break;
        case 'Москва':
            actualPlace = 'Ты живешь в столице России';
            break;
        case 'Минск':
            actualPlace = 'Ты живешь в столице Беларусь';
            break;
        default:
            actualPlace = 'Ты живешь в городе ' + city;
    }

    switch (sport) {
        case 'Крикет':
            sportMaster = 'Круто! Хочешь стать как Тамим Икбал';
            break;
        case 'Теннис':
            sportMaster = 'Круто! Хочешь стать как Фабрис Санторо';
            break;
        case 'Волейбол':
            sportMaster = 'Круто! Хочешь стать как Бруно Резенде';
            break;
        default:
            sportMaster = 'Какой необычный вид спорта ' + sport;
    }

    alert(`Ваш возраст: ${actualAge} \n${actualPlace} \n${sportMaster}`);