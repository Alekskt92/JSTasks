'use strict';
// Task 1
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

    let testArray = [1, 2, 3, 4, [1.1, 1.2, 1.3], 5, 6, 7, [1.4, 1.5, [2.1, 2.2, [3.1, [4.1, 4.2, [5.1, 5.2, [6.1, 6.2]]], 3.3]]]];

// Task 2
    const arr = [
        {
            firstName: 'Vlad',
            lastName: 'Shaitan',
            age: 24,
            gender: 'man'
        },

        {
            firstName: 'Alex',
            lastName: 'Kutuyev',
            age: 18,
            gender: 'teen'
        },

        {
            firstName: 'Ivan',
            lastName: 'Peanuts',
            age: 30,
            gender: 'adult'
        },

        {
            firstName: 'Ann',
            lastName: 'Shaitan',
            age: 20,
            gender: 'woman'
        },

        {
            firstName: 'Sveta',
            lastName: 'Svetlaya',
            age: 45,
            gender: 'lady'
        }
    ];

    function inputSearch() {
        let input = document.getElementById('search');
        console.log(input);
        let inputValue = '';

        input.addEventListener('keyup', event => {
            let resArr = [];
            arr.forEach(element => {
                for (let key in element) {
                    if (element[key].toString().indexOf(event.target.value) !== -1) {
                        resArr.push(element);
                        break;
                    }
                }
            });
            console.log(resArr);
        })

        console.log(inputValue);
    }

    generateList(testArray);
    inputSearch();