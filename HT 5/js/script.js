// Task 1
    let user = {};

    user.name = 'John';
    user.surname = 'Smith';
    user.name = 'Pete';

    delete user.name;

// Task 2
    const user1 = {
        name: 'John'
    }

    user1.name = 'Pete';
    // в данном случае все будет работать, поскольку действие ключевого слова const распостраняется на переменную,
    // а не на ее содержимое.

// Task 3
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 300
    }

    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }