function getRandom(max,min){
    return Math.floor(Math.random()*(max-min+1))+min;
}
var no = 1;
while(no!= 12){
    var flippedCon =  getRandom(1,0);
    console.log(no+" flipped coin "+flippedCon);
    if(flippedCon == 0){
        console.log("Head");
    }else{
        console.log("Tail")
    }
    no++;
}
