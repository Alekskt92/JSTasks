    let date = prompt('Введите ваш год рождения');
    let city;
    let sport;

    switch (date) {
        case null:
            alert('Жаль, что вы не захотели ввести возраст');
            break;
        default:
            city = prompt('Введите ваш город');
    }

    (city === null) ? alert('жаль') : sport = prompt('w');

    (sport === null) ? alert('Жаль, что вы не захотели ввести ваш спорт') : alert('Спасибо');

   /* let actualAge;
    if (date === null) {
        actualAge = 'К сожалению нет никаких данных';
    } else {
        actualAge = 2021 - date;
    }

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

    if (city === null) {
        actualPlace = 'К сожалению нет никаких данных';
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
    
    if (sport === null) {
        sportMaster = 'К сожалению нет никаких данных';
    }

    alert(`Ваш возраст: ${actualAge} \n${actualPlace} \n${sportMaster}`);*/