     function padString(string, count, symbol, bool) {
         if (typeof string !== 'string') return 'Введено неправильное слово';

         if (isNaN(count) || count === null) return 'Введено неправильное количество';

         if (typeof symbol !== 'string' || symbol.length === 0) return 'Введен неправильный символ';

         if (typeof bool !== 'boolean') return 'Введено неправильное направление';

         let word = '';

         if (string.length < count && bool === true) {
             word += string;

             for (let i = 0; i < count - string.length; i++) {
                 word += symbol;
             }

             return word;
         } else if (string.length < count && bool === false) {
             for (let i = 0; i < count - string.length; i++) {
                 word += symbol;
             }

             word += string;
             return word;
         } else {
             word = string.substr(0, count);
             return word;
         }
     }
     console.log(padString('hello', 8, '*', true));
     console.log(padString('hi',10, '^', false));
     console.log(padString('awesome', 3, 'l', true));
     console.log(padString(5, 'l', 6, 'l')); 