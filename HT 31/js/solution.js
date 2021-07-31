    function info() {
        for (let a of document.querySelectorAll('ul > li')) {
            console.log(a);
        }
    }

    function elemCount() {
        console.log(document.getElementById('ulId').children.length);
    }

    function getText() {
        let elements = document.querySelectorAll('ul > li');
        let arr = [];

        for (let i = 0; i < elements.length; i++) {
            let textCont = elements[i].innerHTML;
            arr.push(textCont);
        }

        console.log(arr);
    }

    info();
    elemCount();
    getText();