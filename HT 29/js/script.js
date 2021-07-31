    let calculator = {
        read: function() {
            this.num1 = Number(prompt('Введите первое число'));
            this.num2 = Number(prompt('Введите второе число'));
        },

        sum: function() {
            if(isNaN(this.num1) || isNaN(this.num2)) return 'Проверьте ваши данные';
            return this.num1 + this.num2;
        },

        mul: function () {
            if(isNaN(this.num1) || isNaN(this.num2)) return 'Проверьте ваши данные';
            return this.num1 * this.num2;
        }
    }

    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());

    console.log(calculator);