var counter = function() {
    var privateCounter = 0;

    function changeBy(num){
        privateCounter += num;
    }
    return {
        increment: function(){
            changeBy(1);
        },
        decrement: function(){
            changeBy(-1);
        },
        showValue: function(){
            return privateCounter;
        }
    }
};

//each closure is independent from each other 
//and references a different version of the privateCounter

var counter1 = counter();

counter1.showValue(); // => 0

counter1.increment();
counter1.increment();

counter1.showValue(); // => 2

var counter2 = counter();
counter2.showValue(); // => 0