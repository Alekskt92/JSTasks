'use strict'

    const data = JSON.parse(localStorage.getItem('data'));

    function createList() {
        if (!data) alert('К сожаленю сохраненных данных нет, введите новые данные');

        for (let key in data) {
            const ul = document.createElement('ul');
            document.body.append(ul);
            const li = document.createElement('li');
            li.innerHTML = `${key} = ${data[key]}`;
            ul.append(li);
        }
    }

    createList();