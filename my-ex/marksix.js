const pool =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49];
console.log("Full pool: ");
console.log(pool);

let ret = [];
let count = 0;
let timer = setInterval(function(){
    let i = Math.floor(Math.random() * pool.length);
    console.log("Number drawn: " + pool[i]);
    ret.push(pool[i]);
    count++;
    pool.splice(i, 1);
    if(count === 7){
        clearInterval(timer);
        console.log("Result: ");
        console.log(ret);
        console.log("Remaining pool: " );
        console.log(pool);
    }
},1000);
