function getRandom(min , max){
    return Math.floor(Math.random() * (max- min + 1)) + min;
}

var no = getRandom(1,2000);

function countDigits(no){
    let count = 0;
    if(no >= 1)
        ++count;
    
    while( no/10 >=1){
        no = no/10;
        ++count;
    }
    return count;
}

var  digits = countDigits(no);
console.log("Given random number is "+ no +" having digits is "+digits);