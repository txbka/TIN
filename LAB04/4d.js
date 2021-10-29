const inAlphabeticalOrder = (inputText) =>
{
    return inputText.toLowerCase().split("").sort().join("");
}

console.log("webmaster in alphabetical order: " + inAlphabeticalOrder("webmaster"))