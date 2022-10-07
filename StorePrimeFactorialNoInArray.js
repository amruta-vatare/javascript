
let primeFactors=[];
let index = 0;

function getFact(n){
    var foundFactor = false;
    if(isPrime(n))
        primeFactors.push(n);

    for(var i = 2;i<n-1;i++){
        if(foundFactor)
            break;
        for (var j = 1;j<n-1;j++){
            if(i*j == n){
                foundFactor = true;
                if(isPrime(i) && isPrime(j)){
                    primeFactors[index] = i;
                    primeFactors[index+1] = j;
                }else if(isPrime(i)){
                    primeFactors[index] = i;
                    getFact(j);
                }else if(isPrime(j)){
                    primeFactors[index]=j;
                    getFact(i);
                }else
                {
                    getFact(i);
                    getFact(j);
                }
                index++;
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

getFact(26);

for(let i = 0;i<primeFactors.length;i++){
    console.log(primeFactors[i]);
}

