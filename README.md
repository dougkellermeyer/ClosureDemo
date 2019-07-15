# Closures in JavaScript
## Closures are incredibly useful and prevelant in JavaScript, but often misunderstood

### So what exactly is closure?
- **Closure** - is the combination of a function and the lexical environment within which that function was declared
 * Another way to think about it is when a function is able to access its lexical scope, even when the function is executing outside of its lexcial scope

## Every closure has 3 scopes:
 * Local scope (own scope)
 * Outer functions scope
 * Global scope
  - Let's see this in action:

    ```javascript
    function outer(){
        var a = 1;
        return function inner(){
            console.log(a);
        };
    };

    var access = outer() 

    access(); // => 1 
    ```
    * So what's happening here? 
     * We assign the `outer()`function to the variable `access`
     * We invoke `access` as a function `access()`, which invokes `outer()`
     * Because `outer()` returns the `inner()` function, invoking `access()` essentially executes `inner()`
     * Although `inner()`is being executed outside of its original lexical scope, it stil has access to its lexical scope and is a textbook example of **closure**


## So closures are a thing, but how are they utilized?
 ### There are few common use cases for closures...  
 1. ### Data-privacy
    * Closures are commonly used to provide object data privacy

        ```javascript
        function secret(msg){
            return function(){
                return msg;
            };
        };
        ```
    * The function `secret()` takes the argument `msg` and returns a new function that returns `msg`. This means that whatever we pass into `secret()` becomes the value of `msg`. 
    * Like this:
        ```javascript 
        var mySecret = secret('hi');
        mySecret(); // => 'hi'
        ```

 2. Events and Callbacks