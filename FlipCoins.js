function getRandom(max,min){
    return Math.floor(Math.random()*(max-min+1))+min;
}
var flippedCon =  getRandom(1,0);
console.log(" flipped coin "+flippedCon);

if(flippedCon == 0){
    console.log("Head");
}else{
    console.log("Tail")
}