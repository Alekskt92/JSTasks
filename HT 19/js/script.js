    function belongsToCircle() {
        let x = 4;
        let y = 9;
        let radius = 10;
        let hip = x**2 + y**2;
        let z = Math.sqrt(hip);

        (z < radius) ? alert('Точка лежит в пределах окружности') : alert('Точка лежит за пределами окружности');
    }

    belongsToCircle();