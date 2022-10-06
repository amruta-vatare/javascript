function getRandom(min,max){
    return Math.floor(Math.random() * (max-min+1))+min; 
}

var digit = getRandom(0,2); 

if(digit == 0){
    console.log("Zero");
}else if(digit == 1){
    console.log("One");
}else{
    console.log("Two");
}