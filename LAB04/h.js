const secondLowestAndSecondGreatest = (array) =>
{
    if(array.length === 1)
    {
        return [array[0], array[1]];
    }
    array = array.sort();
    if(array.length === 2)
    {
        return [array[0], array[1]];
    }
    return [array[1], array[array.length - 2]];
}

console.log("Second lowest and second greatest from [1,2,3,4,5]: " + secondLowestAndSecondGreatest([1,2,3,4,5]));