function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

const arrayOfRandoms = [];

for(var i = 0;i<10;i++){
    arrayOfRandoms[i] = getRandom(10,50);
}
console.log(arrayOfRandoms);
let sortedArray = arrayOfRandoms.sort((a,b)=>a-b);
console.log("Sorted array: "+sortedArray+"\n");

let max,secondMax,min,secondMin;
var index = sortedArray.length;

min = sortedArray[0];
secondMin = sortedArray[1];

max = sortedArray[index-1];
secondMax = sortedArray[index-2];

console.log("Max: "+max);
console.log("Second Max: "+secondMax+"\n");

console.log("Min: "+min);
console.log("secondMin : "+secondMin);
