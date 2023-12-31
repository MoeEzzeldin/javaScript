/*Write the function getLongestDryStreak, which accepts an array of precipitation amounts as a parameter,
and returns a number indicating the length of the longest dry streak based on the given data.*/
function getLongestDryStreak(arr) {
  //.. declare 2 var to store value of [i]
  let currentDry = 0;
  let longestDry = 0;
  //... loop through arr.length
  for (let i = 0; i < arr.length; i++) {
    //.... condition to increase currentDry based on '0' indicates no rain
    if (arr[i] === 0) {
      currentDry += 1;
    }
    //.....condition for [i] to stop and do smth when it's not '0' or end of arr
    if (arr[i] !== 0 || i === arr.length - 1) {
      if (currentDry > longestDry) {
        longestDry = currentDry;
      }
      //......reset currentDay value
      currentDry = 0;
    }
  }
  //....... return longestDry
  return longestDry;
}
