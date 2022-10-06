function getRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var range = getRandom(1,50);

console.log("Range :"+range);

for(let i = 1;i <= range; i++){
    let flag = 0;
    
    for(let j = 2; j < i; j++){
        if(i % j == 0){
            flag = 1;
            break;
        }
    }
    if(i>1 && flag == 0){
        console.log(i+" is prime number");
    }else{
        console.log(i+" is not prime number");
    }
}