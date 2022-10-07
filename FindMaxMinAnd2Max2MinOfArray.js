function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

const arrayOfRandoms = [];

for(var i = 0;i<10;i++){
    arrayOfRandoms[i] = getRandom(10,50);
}

console.log(arrayOfRandoms);

function findMaxAndSecondMax(arrayOfRandoms){
    let maxNo; let secondMax =0;
    for(var i = 0;i<arrayOfRandoms.length;i++){

        if(i==0){
            maxNo = arrayOfRandoms[i];
        }

        if(maxNo < arrayOfRandoms[i]){
            secondMax = maxNo;
            maxNo = arrayOfRandoms[i];
        }else if(secondMax < arrayOfRandoms[i] && maxNo != arrayOfRandoms[i]){
            secondMax = arrayOfRandoms[i];
        }

    }

    console.log("Max no is "+maxNo);
    console.log("Second max is "+secondMax);
}

function findMinAndSeocndMin(arrayOfRandoms){
    let minNo; let secondMin =0;
    for(var i = 0;i<arrayOfRandoms.length;i++){

        if(i==0){
            minNo = arrayOfRandoms[i];
        }

        if(minNo > arrayOfRandoms[i]){
            secondMin = minNo;
            minNo = arrayOfRandoms[i];
        }else if(secondMin > arrayOfRandoms[i] && minNo != arrayOfRandoms[i]){
            secondMin = arrayOfRandoms[i];
        }

    }

    console.log("Min no is "+minNo);
    console.log("Second min is "+secondMin);
}


findMaxAndSecondMax(arrayOfRandoms);
console.log();
findMinAndSeocndMin(arrayOfRandoms);