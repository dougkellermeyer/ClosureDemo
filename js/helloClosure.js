function helloName (name){
    return function(){
        console.log("hello " + name);
    }
}

var hiDoug = helloName('Doug')
hiDoug() // => hello Doug


