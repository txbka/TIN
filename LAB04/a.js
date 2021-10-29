function iterativeFactorial(inputNum)
{
    let result = 1;
    for(let i = 1; i <= inputNum; i++)
    {
        result *= i;
    }
    return result;
}
const recursiveFactorial = (inputNum) =>
{
    if(inputNum === 0)
    {
        return 1;
    }
    return recursiveFactorial(inputNum - 1) * n;
}

console.log("Iterative factorial of 10: " + iterativeFactorial(10));
console.log("Recursive factorial of 10: " + iterativeFactorial(10));