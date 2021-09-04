'use strict';

    function getData() {
        document.querySelector('#form').addEventListener('submit', event => {
            event.preventDefault();

            let inputs = document.querySelectorAll('input, textarea, select');
            let data = {};
            let info;

            for (let info of inputs) {
                if (info.value === '') return 'Данные отсутствуют';
                data[info.name] = info.value;
            }

            console.log(data);
            saveInfo(data);
            showInfo();


        })
    }

    function saveInfo(localData) {
        let storage = JSON.stringify(localData);
        localStorage.setItem('data', storage);
    }

    function showInfo () {
        window.location.href = 'info.html';
    }

    getData();