function getRandom(min,max){
    return Math.floor(Math.random() * ( max - min + 1)) + min;
}

var day = getRandom(1,7);

switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    default:
        console.log("Saturday");
        break;
}