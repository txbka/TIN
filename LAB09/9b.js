const button = document.getElementById('submit');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const op = document.getElementById('op');
const resultdiv = document.getElementById('results');
let xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) 
    {
        var p = document.createElement("p");
        var res = document.createTextNode(`[${num1.value} ${op.value} ${num2.value} = ${JSON.parse(xmlhttp.responseText).result}] `);
        p.appendChild(res);
        resultdiv.appendChild(p);
    }
};

button.addEventListener('click', () => 
{
    xmlhttp.open("POST", "http://localhost:8000/calc", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");

    xmlhttp.send(
        JSON.stringify({
        a: num1.value,
        b: num2.value,
        op: op.value,
    }));
});
