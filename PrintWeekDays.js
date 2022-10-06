function getRandom(min,max){
    return Math.floor(Math.random() * ( max - min + 1)) + min;
}

var day = getRandom(1,7);

if( day == 1 ){
    console.log("Sunday");
}else if( day == 2 ){
    console.log("Monday");
}else if( day == 3 ){
    console.log("Tuesday");
}else if( day == 4 ){
    console.log("wednesday");
}else if( day == 5 ){
    console.log("Thursday");
}else if( day == 6 ){
    console.log("Friday");
}else{
    console.log("Saturday");
}
