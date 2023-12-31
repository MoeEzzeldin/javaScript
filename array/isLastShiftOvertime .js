/*Write a function isLastShiftOvertime that accepts an array containing 
the number of hours worked each shift during a given pay period. 
Return whether they worked overtime on the last shift.*/
function isLastShiftOvertime(numOfHoursPerShift) {
    return numOfHoursPerShift[numOfHoursPerShift.length-1] > 8;
}
