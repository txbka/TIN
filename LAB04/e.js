const longestWordInString = (inputText) =>
{
    let maxIndex = 0;
    let words = inputText.split(" ");
    for(let i = 0; i < words.length; i++)
    {
        if(words[maxIndex].length < words[i].length)
        {
            maxIndex = i;
        }
    }
    return words[maxIndex];
}
console.log("Longest word in sentence 'Ala ma kota' is: " + longestWordInString("Ala ma kota"));