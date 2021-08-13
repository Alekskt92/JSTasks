'use strict';
// Task 1
    function getAttribute() {
        let elem;
        let ul = document.getElementsByTagName("ul").item(0);
        let attributesValues = [];
        let attributesNames = [];

        for (elem of ul.attributes) {
            attributesValues.push(elem.nodeValue);
            attributesNames.push(elem.localName);
        }

        console.log(attributesValues);
        console.log(attributesNames);
    }

    function editContent() {
        let li = document.getElementsByTagName('li');
        li[li.length - 1].innerHTML = 'Привет, меня зовут Саша!';
        li[0].setAttribute('data-my-name', 'Alex');
    }

    function ulEdit() {
        let ulNew = document.getElementById('ulId');
        ulNew.removeAttribute('data-dog-tail');
    }

// Task 2
    let testArray1 = [1, 2, 3];
    let testArray2 = [1, 2, [1.1, 1.2, 1.3], 3];

    function generateList(array) {
        let ul = document.createElement('ul');

        for (let i = 0; i < array.length; i++) {
            let li = document.createElement('li');
            li.textContent = array[i];

            if (Array.isArray(array[i])) {
                li.textContent = '';
                li.append(generateList(array[i]));
            }

            ul.append(li);
        }

        document.body.append(ul);
        return ul;
    }

// Task 3
    function createTable() {
        let count = 1;
        let body = document.body;
        let table = document.createElement('table');
        for (let i = 0; i < 10; i++) {
            let tr = table.insertRow();

            for (let j = 0; j < 10; j++) {
                let td = tr.insertCell();
                td.innerHTML = count++;
            }
        }
        body.appendChild(table);
    }

    getAttribute();
    editContent();
    ulEdit();
    generateList(testArray1);
    generateList(testArray2);
    createTable();