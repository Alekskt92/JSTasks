    function bind(thisArg, func) {
        return function (...args) {
            func.apply(thisArg, args);
        }
    }

    let message = {
        type: 'info',
        content: 'Hello world!'
    };

    function showMessage() {
        console.log(`Message ${this.type}, ${this.content}`);
    }

    bind(message, showMessage)();