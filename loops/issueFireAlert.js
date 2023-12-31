/*Write a function issueFireAlert that accepts an array of objects.
Each object stores projected weather data for a given day:
{
    highTemperature: 28,
    humidity: 33,
    date: "2024/09/03"
}
issueFireAlert returns the first date for which conditions merit a fire alert.
WRC issues alerts when the high temperature rises higher than 32 degrees Celsius
and the humidity remains less than 30 percent.
If none of the objects in the array trigger a fire alert, the function returns null.*/
//.declare function
function issueFireAlert(arr) {
  //..loop through the array of objects
  for (let i = 0; i < arr.length; i++) {
    //... set the condition temp > than 32 and humidity < 30
    if (arr[i].highTemperature > 32 && arr[i].humidity < 30)
      //....return [i].date if meets the condition
      return arr[i].date;
  }
  //..... return null
  return null;
}
