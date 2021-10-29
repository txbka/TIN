const fibonacci = (inputNum) => 
{
    if(inputNum === 0 || inputNum === 1) return inputNum;
    return fibonacci(inputNum - 1) + fibonacci(inputNum -2);
}
console.log("Fibonacci for 10 is: " + fibonacci(10));