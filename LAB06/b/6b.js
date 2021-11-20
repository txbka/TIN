setTimeout(() => 
{
    let randomText = document.createTextNode("random text");
    let paragraph = document.createElement("p");
    paragraph.appendChild(randomText);
    document.getElementById("main").appendChild(paragraph);
}, 5000);