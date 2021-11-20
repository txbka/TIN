const ageIn = document.getElementById("ageIn");
const emailIn = document.getElementById("emailIn");
const validator = document.getElementById("validator");
const ageL = document.getElementById("ageL");
const emailL = document.getElementById("emailL");

validator.addEventListener("click", () => {
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
        validator.style.color = "green";
        return validated;
    }
    else
    {
        validator.style.color = "red";
        return validated;
    }
});