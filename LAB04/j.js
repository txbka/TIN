const binarySearch = (searchNum, array, first, last) => 
{
    if(first > last) return false;
    let mid = Math.floor((first + last) / 2);
    if(array[mid] === searchNum) return true;
    if(array[mid] > searchNum) return binarySearch(searchNum, array, first, mid - 1);
    else return binarySearch(searchNum, array, mid + 1, last);
}

console.log("Binary search for 5 in [1,2,3]: " + binarySearch(5, [1,2,3,4], 0, 3));
console.log("Binary search for 5 in [1,2,3,5]: " + binarySearch(5, [1,2,3,5], 0, 4));