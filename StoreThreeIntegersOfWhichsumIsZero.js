let integers = [0 ,-1, 2, -3, 1];
let len = integers.length;
let found = 0;
for(let i=0; i < len-2; i++){

    for(let j = i+1; j < len-1; j++){

        for(let k = j+1; k < len; k++){
            if(integers[i]+integers[j]+integers[k] == 0){
                console.log(" "+integers[i]+" "+integers[j]+" "+integers[k]+" sum is "+0);
                found=1;
            }
        }
    }
}

if(found == 0){
    console.log("Not Found");
}