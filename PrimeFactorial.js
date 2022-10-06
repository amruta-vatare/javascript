
function getFact(n){
    var foundFactor = false;
    if(isPrime(n))
    console.log(" "+n);

    for(var i = 2;i<n-1;i++){
        if(foundFactor)
            break;
        for (var j = 1;j<n-1;j++){
            if(i*j == n){
                foundFactor = true;
                if(isPrime(i) && isPrime(j)){
                    console.log(" "+i);
                    console.log(" "+j);
                }else if(isPrime(i)){
                    console.log(" "+i);
                    getFact(j);
                }else if(isPrime(j)){
                    console.log(" "+j);
                    getFact(i);
                }else
                {
                    getFact(i);
                    getFact(j);
                }
            }else{
                continue;
            }
        }
    }
}

function isPrime(n){
    if(n<=1){
        return false;
    }
    for(var i = 2 ;i<n/2;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

getFact(10);


