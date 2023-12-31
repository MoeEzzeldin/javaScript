/*Write a function hasFreezingTemp that accepts an array of temperatures (in degrees Celsius). 
The function returns true if any of the temperatures are zero or less.*/
function hasFreezingTemp(arr) {
  let freeze = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      freeze = true;
    }
  }
  return freeze;
}
