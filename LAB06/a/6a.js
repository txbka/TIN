cIn = document.getElementById("cIn");
fIn = document.getElementById("fIn");
convertCtoF = document.getElementById("convertCtoF");
convertFtoC = document.getElementById("convertFtoC");

convertCtoF.addEventListener("click", () =>
{
    fIn.value = cIn.value * (9/5) + 32;
});
convertFtoC.addEventListener("click", () =>
{
    cIn.value = ((fIn.value-32) * 5) / 9;
});