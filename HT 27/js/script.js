    const callbacks = {
        incCb: function (arg) {
            let a =  'increase callback ' + arg;
            alert(a);
            return a;
        },


        decCb: function (arg) {
            let a =  'decrease callback ' + arg;
            console.log(a);
            return a;
        },


        getCb: function (arg) {
            let a =  'get callback ' + arg;
            console.log(a);
            return a;
        },
    }


    function counter(num = 0, obj) {
        let count = num;
        let incCount = 0;
        let decCount = 0;
        let getCount = 0;


        function increase() {
            ++incCount;
            return obj?.incCb ? obj.incCb(++count) :  ++count;
        }


        function decrease() {
            ++decCount;
            return obj?.decCb ? obj.incCb(--count) :  --count;
        }


        function get() {
            ++getCount;
            return obj?.getCb ? obj.incCb(count) :  count;
        }

        function getStatistics() {
            return {
                incCount,
                decCount,
                getCount
            }
        }

        function clean() {
            return count = 0;
        }


        return {
            increase,
            decrease,
            get,
            getStatistics,
            clean
        }
    }


    let newCounter = counter(10, callbacks);


    newCounter.increase();
    newCounter.increase();
    newCounter.increase();
    newCounter.decrease();
    console.log(newCounter.get());
    console.log(newCounter.increase());
    console.log(newCounter.getStatistics());
    console.log(newCounter.clean());
