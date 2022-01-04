import
{
    kmToMi,
    miToKm
} from "./distConverter";

import 
{
    cToF,
    cToK,
    kToC,
    kToF,
    fToC,
    fToK,
} from "./tempConverter";

const cIn = document.getElementById("cIn");
const kIn = document.getElementById("kIn");
const fIn = document.getElementById("fIn");

const miIn = document.getElementById("miIn");
const kmIn = document.getElementById("kmIn");

cIn.addEventListener("input", (x) =>
{
    fIn.value = cToF(x.target.value);
    kIn.value = cToK(x.target.value);
});
kIn.addEventListener("input", (x) =>
{
    cIn.value = kToC(x.target.value);
    fIn.value = kToF(x.target.value);
});
fIn.addEventListener("input", (x) =>
{
    cIn.value = fToC(x.target.value);
    kIn.value = fToK(x.target.value);
});
miIn.addEventListener("input", (x) =>
{
    kmIn.value = miToKm(x.target.value);
});
kmIn.addEventListener("input", (x) =>
{
    miIn.value = kmToMi(x.target.value);
});

