function getRandom(min,max){
    return Math.floor(Math.random() * (max-min +1)) + min;
}

var no = getRandom(1,25);
var result = 0;
for(var i = 2 ;i< no/2;i++){
    result = no % i;
    if(result==0){
        console.log("Given number is not prime number "+no);
        break;
    }
}
if(result != 0){
    console.log("Given number is prime number "+no);
}
