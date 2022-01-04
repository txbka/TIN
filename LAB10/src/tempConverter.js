const cToF = (celsius) =>
{
    return celsius * (9/5) + 32;
}

const cToK = (celsius) =>
{
    return celsius + 273.15;
}

const kToC = (kelvin) =>
{
    return kelvin - 273.15;
}

const kToF = (kelvin) =>
{
    return ((kelvin - 273.15) * (9/5) + 32);
}

const fToC = (fahrenheit) =>
{
    return ((fahrenheit - 32) * 5) / 9;
}

const fToK = (fahrenheit) =>
{
    return (((fahrenheit - 32) * 5) / 9) + 273.15;
}

export 
{
    cToF,
    cToK,
    kToC,
    kToF,
    fToC,
    fToK,
};  