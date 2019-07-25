//simple closure

function add(a){
    return function(b){
        return a + b
    }
}

add(1)(2) // => 3

//-----------------------------------------------------------------------------------------------

function outer(){
    var a = 1;
    return function inner(){
        console.log(a);
    }
}

let access = outer() 

access(); // => 1 

let keep = access

keep() // => 1
//This demonstrates closure because inner() is accessing its original lexical scope 
//but is being executed outside of its lexical scope -invoking access() executes inner()

//----------------------------------------------------------------------------------------------
//another closure example

function secret(msg){
  return function(){
    console.log("the secret message is " + msg);
  };
};

var mySecret = secret('hi');
console.log(mySecret());

//another closure example from Brian Barbour - https://dev.to/steelvoltage/closures-the-js-scope-hack-3365

const checkSecret = () => {
  const secret = 'pillow' // gets tossed into the bin! 
  return attempt => {
    return secret === attempt
  }
}

const attempt = checkSecret()

console.log(attempt('blanket')) // returns false
console.log(attempt('pillow')) // returns true

console.log(checkSecret())
console.log(checkSecret.toString()) // => obviously you can access the "secret" variable using closure, so keep that in mind :)
