    function getData() {
        document.querySelector('#form').addEventListener('submit', event => {
            event.preventDefault();

            let data = FormData(event.target);
            console.log(data);
        })
    }

    getData();