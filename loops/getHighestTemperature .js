/*Write a function getHighestTemperature that accepts an array of temperatures (in degrees Celsius). The function returns the highest value found in the array.

You can assume that the temperatures array contains at least one value.*/
//. declare function
function getHighestTemperature(arr) {
  //.. declare the returned var with highest value found
  let highest = arr[0];
  //... loop through the array
  for (let i = 0; i < arr.length; i++) {
    //.... set the condision to find highest index in arr using [i]
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }
  return highest;
}
