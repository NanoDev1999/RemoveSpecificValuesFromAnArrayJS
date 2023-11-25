function removeSpecificValuesFromArray(array, valueToRemove) {
    var i = 0;
    while (i < array.length) {
        if (array[i] === valueToRemove) {
            array.splice(i, 1);
        } 
        else {
            i++;
        }
    }
    return array;
}

var array = [1, 2, 3, 2, 4, 2, 5, 2, 111, 22, 2, 2, 2, 2];
var valueToRemove = 2;
console.log("Input Array: " + array);
console.log("Value to Remove: " + valueToRemove);
removeSpecificValuesFromArray(array, valueToRemove);
console.log("Output Array: " + array);

