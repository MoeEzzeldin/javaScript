/*Write a function isOverMax which accepts three arrays of toppings, 
then returns a Boolean indicating whether the total number of toppings exceeds the maximum of 5.*/
function isOverMax (arr1, arr2, arr3)
{
    return arr1.length 
         + arr2.length
         + arr3.length 
         > 5 ;
}