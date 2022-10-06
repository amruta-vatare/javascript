IsPalindrome(123);
IsPalindrome(151);
isPrime(123);
isPrime(151);

function IsPalindrome(num){
    let reverseNum = ReverseNumber(num);
    if(reverseNum == num)
    {
        console.log("Given number " + num + " is a palindrom");
    } 
    else
    {
        console.log("Given number " + num + " is not a palindrom");
    }
}

function ReverseNumber(num)
{
    let reverseNum = 0;
    while (num % 10 != 0)
    {
        let rem = num % 10;
        let quo = parseInt(num / 10); 

        reverseNum = (reverseNum * 10) + rem;
        num = quo;
    } 
    return reverseNum;
}

function isPrime(num){
    var flag = true;
    for(var i = 2 ;i<num/2;i++){
        if(num %i == 0){
            flag = false;
        }
    }

    if(flag){
        console.log("Given number "+num+" is prime number")
    }else{
        console.log("Given number "+num+" is not prime number")
    }
}