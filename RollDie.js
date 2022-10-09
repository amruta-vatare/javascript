function getDiceNo(){
    let min = 1;
    let max = 6;
    return Math.floor(Math.random()*(max-min+1))+min;
}

/*let diceNo =  getDiceNo();
console.log(diceNo);
let myMap = new Map();
let cnt = 0;
myMap.set(diceNo,cnt+1);
console.log(myMap.get(diceNo));
console.log(myMap.has(diceNo));*/

function checkDiceNo(){
    let myMap = new Map();
    let breakCondition = 0;
    let cnt = 0;
   while(breakCondition == 0 ){
        var no = getDiceNo();
        if(myMap.has(no)){
            let cntValue =  myMap.get(no);
           // console.log("Dice No : "+no+" value : "+cntValue);
            if( myMap.get(no) != 10 ){
                myMap.set(no, myMap.get(no)+1);
            }else{
                breakCondition = 1 ;
            }
        }
        else{
        myMap.set(no,cnt);
        }
   }

 myMap.forEach((value,key) =>{
    console.log("No of occurrence : "+value+" of dice No : "+key)});
}

checkDiceNo();