const isPrime = (inputNum) => 
{
    if(inputNum < 2) return false;
    for(let i = 2; i < inputNum; i++)
    {
        if(inputNum % i === 0) return false;
    }
    return true;
}

console.log("IsPrime(5): " + isPrime(5));
console.log("IsPrime(2): " + isPrime(2));
console.log("IsPrime(10): " + isPrime(10));