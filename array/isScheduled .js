/*Write a function isScheduled that accepts an employee name, an array of names for the day shif*/
function isScheduled(name, day, night)
{
/*  return indexOf day by name and see if it's >= to 0 
    else it will be -1 or false*/
    return day.indexOf(name) >= 0 ||
        night.indexOf(name) >= 0;
}