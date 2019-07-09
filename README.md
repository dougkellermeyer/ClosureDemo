# Closures in JavaScript
## Closures incredibly useful and prevelant in JavaScript, but often misunderstood

### So what exactly is closure?
- **Closure** - when a function is able to access its lexical scope, even when the function is executing outside of its lexcial scope

- Let's see this in action:

    ```javascript
    function outer(){
        var a = 1;
        return function inner(){
            console.log(a);
        }
    }

    var access = outer() 

    access(); // => 1 
    ```
    * So what's happening here? 
     * 

