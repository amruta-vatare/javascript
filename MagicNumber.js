var n;
var remainder = 1;
var  number;
var sum = 0;  
n = 325;
number = n;  
while (number > 9)             
{  
while (number > 0)  
{    
remainder = number % 10;   
sum = sum + remainder;   
number = number / 10;     
}  
number = sum;  
sum = 0;  
}  
if (number == 1)  
{  
    console.log("The given number is a magic number."+number);  
}  
else  
{  
    console.log("The given number is not a magic number."+number);  
}  