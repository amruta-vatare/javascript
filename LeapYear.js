console.log("Leap Year");
var year = 1996;
if(( year % 4 == 0) || ( year % 100 == 0) && ( year % 400 )){
    console.log("Given year is leap year");
}else{
    console.log("Given year is not leap year")
}