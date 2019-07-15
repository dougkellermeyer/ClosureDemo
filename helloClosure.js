function helloName (name){
    return function(){
        console.log("hello " + name);
    }
}

var hiDoug = helloName('Doug')
hiDoug() // => hello Doug

function closureCounter(arr){
    return function(){
        return arr[0]+1
    };
};

var showMe = closureCounter([0,1]);
console.log(showMe())
