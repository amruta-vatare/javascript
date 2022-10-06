
function getRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var no = getRandom(1,10);
//var no = 5;
var factorial = 1;
for(var i = 1;i<=no;i++){
    factorial = factorial * i;
}
console.log("Factorial of "+no+" is " +factorial);