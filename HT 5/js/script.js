// Task 1
    let user = {
        name: 'John',
        surname: 'Smith'
    }

    user.name = 'Pete';
    console.log(user.name);

    delete user.name;
    console.log(user);

// Task 2
    const user1 = {
        name: 'John'
    }

    user1.name = 'Pete';
    console.log(user1.name);
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

    console.log(sum);
