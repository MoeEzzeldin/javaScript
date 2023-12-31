/*Write a function getForecastCities that accepts an array of forecasts, 
and returns an array of the unique cities for which forecasts exist. 
Keep in mind that if more than one forecast exists for a given city, 
you must list that city only once in the returned array.*/
//.declare function
function getForecastCities(arr) {
  //.. set uniqueCities to an empty array to return
  let uniqueCities = [];
  //... start looping though the array
  for (let i = 0; i < arr.length; i++) {
    //.... if conditions is no repeating cities
    if (uniqueCities.indexOf(arr[i].city) === -1)
      //.... push cities in the empty array
      uniqueCities.push(arr[i].city);
  }
  return uniqueCities;
}
