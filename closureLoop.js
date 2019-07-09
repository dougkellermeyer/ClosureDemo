//lets's look at closures as they relate to loops

for (var i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log( i ); // 6 6 6 6 6 
    }, i*200 );
}

//Because the loop's terminating condition is when i is NOT less than or equal to 5, the first time this is true is 6.

//So, this means that the timeout callbacks are running AFTER the completion of the loop, and hence 6 is printed out 5 times.

//if we swap var for let in our loop, it runs fine

for (let i=1; i<=5; i++) {
    setTimeout( function timer2(){
        console.log( i ); // 1 2 3 4 5  
    }, i*1000 );
}

//not only does let allow us to declare i for the scope block, but it does so for each iteration
