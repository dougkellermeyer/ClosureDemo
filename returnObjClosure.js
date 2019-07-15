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

var counter1 = counter();

console.log(counter1.showValue()); // => 0

counter1.increment();
counter1.increment();

console.log(counter1.showValue()) // => 2

//each closure is independent from each other and references a different versin of the privateCounter

var counter2 = counter();
console.log(counter2.showValue()) // => 0