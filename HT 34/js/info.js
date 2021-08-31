'use strict'

    const data = JSON.parse(localStorage.getItem('data'));

    (() => {
        if (!data) {
            let message = document.createElement('h1');
            message.innerHTML = 'Сохраненные данные отсутствуют, введите ,пожалуйста, новые данные!';
            document.body.append(message);
            return;
        }

        for (let key in data) {
            const ul = document.createElement('ul');
            document.body.append(ul);
            const li = document.createElement('li');
            li.innerHTML = `${key} = ${data[key]}`;
            ul.append(li);
        }
    })()