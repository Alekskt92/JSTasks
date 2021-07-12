    function starFloor() {
        let number = Number(prompt('Введите количество этажей'));
        let spaceCount = number - 1;
        let symbolCount = 1;
        let final = '';

        for (let i = 0; i < number; i++) {
            for (let j = 0; j < spaceCount; j++) {
                final += ' ';
            }
            spaceCount--;

            for (let j = 0; j < symbolCount; j++) {
                final += '*';
            }
            symbolCount += 2;

            final += '\n';
        }

        console.log(final);
    }

    starFloor()