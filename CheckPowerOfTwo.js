function getRandom(min,max){
    return Math.floor(Math.random() * (max-min +1)) + min;
}

var no = getRandom(1,25);
var n = 2;
var power = 1;
for(var i = 1;i<=no;i++){
   power = power * n;
   console.log(" Power of 2^"+i+ " is "+power);
}