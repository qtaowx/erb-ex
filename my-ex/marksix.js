const pool =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49];
console.log("Full pool: ");
console.log(pool);

let ret = [];
let timer = setInterval(function(){
    // get a random index of 0 to 48
    let i = Math.floor(Math.random() * pool.length);
    // log the drawn number
    console.log("Number drawn: " + pool[i]);
    // add the number to the result array
    ret.push(pool[i]);
    // remove the number from the pool
    pool.splice(i, 1);
    // check if all numbers have been drawn
    if(ret.length === 7){
        clearInterval(timer);
        console.log("Result: ");
        console.log(ret);
        console.log("Remaining pool: " );
        console.log(pool);
    }
},1000);
