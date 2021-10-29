const isPalindrome = (inputText) => 
{
    text = inputText.toLowerCase();
    let reverseText = "";
    for(let i = text.length - 1; i >= 0; i--) 
    {
        reverseText += text[i];
    }
    return text === reverseText;
}
console.log("Is aabbaa a palindrome? " + isPalindrome("aabbaa"));
console.log("Is abc a palindrome? " + isPalindrome("abc"));
