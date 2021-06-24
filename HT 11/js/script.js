    let number = prompt('Введите ваше число');

    for (;;) {
         if (number % 2 === 0) {
             console.log(false);
         } else if (number % 3 === 0) {
             console.log(false);
         } else if (number % 5 === 0) {
             console.log(false);
         } else {
             console.log(true);
         }
         break;
    }