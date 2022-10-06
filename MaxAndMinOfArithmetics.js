function getRandom(min,max){
    return Math.floor(Math.random() * (max-min +1)) + min;
}

var a = getRandom(10,99);
var b = getRandom(10,99);
var c = getRandom(10,99);

var result1 = ( a + b * c );
var result2 = ( a % b + c );
var result3 = ( c + a / b );
var result4 = ( a * b + c );

console.log(" a : "+a+"  b : "+b+"  c : "+c);

if( (result1 > result2) && (result1 > result3) && (result1 > result4)){
    console.log("Max is ( a + b * c ) "+result1);
}else if( (result2 > result1) && (result2 > result3) && (result2 > result4)){
    console.log("Max is  ( a % b + c ) "+ result2);
}else if( (result3 > result2) && (result3 > result1) && (result3 > result4) ){
    console.log("Max is  ( c + a / b ) "+ result3);
}else{
    console.log("Max is  ( a * b + c ) "+ result4);
}
