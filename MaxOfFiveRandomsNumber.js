let max = 0;
let min = 0;

for(var i = 1;i<=5;i++){
    let a = Math.floor(Math.random()*1000);
    console.log(a);
    if(i == 1){
        max = a;
        min = a;
    }
    
    if(a >  max){
        max = a;
    }else if(a < min){
        min = a;
    }
}
console.log("Max number is :" + max)
console.log("Min number is :" + min)