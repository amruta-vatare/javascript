function getRandom(min,max){
    return Math.floor(Math.random() * (max-min+1))+min; 
}

var digit = getRandom(0,2); 

switch(digit){
    case 1: 
    console.log("One");
    break;
    case 2: 
    console.log("Two");
    break;
    default:
    console.log("Zero");
    break;
}