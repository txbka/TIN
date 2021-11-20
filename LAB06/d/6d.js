const ageIn = document.getElementById("ageIn");
const emailIn = document.getElementById("emailIn");
const adder = document.getElementById("adder");
const ageL = document.getElementById("ageL");
const emailL = document.getElementById("emailL");
const dt = document.getElementById("dt");

adder.addEventListener("click", () => {
    let validated = true;
    if(ageIn.value == "" || ageIn.value <= 0)
    {
        ageIn.style.color = "red";
        ageL.style.color = "red";
        validated = false;
    } 
    else
    {
        ageIn.style.color = "black";
        ageL.style.color = "black";
    }
    let regex = new RegExp("^[^@\s]+@[^@\s]+\.[^@\s]+$")
    if(!regex.test(emailIn.value))
    {
        emailIn.style.color = "red";
        emailL.style.color = "red";
        validated = false;
    }
    else
    {
        emailIn.style.color = "black";
        emailL.style.color = "black";
    }
    if(validated)
    {
        adder.style.color = "green";
        let row = dt.insertRow(-1);
        let ageCell = row.insertCell(0);
        let emailCell = row.insertCell(1);
        ageCell.appendChild(document.createTextNode(ageIn.value));
        emailCell.appendChild(document.createTextNode(emailIn.value));
        return validated;
    }
    else
    {
        adder.style.color = "red";
        return validated;
    }
});