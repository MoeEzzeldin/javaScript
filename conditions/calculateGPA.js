/*let reportCard = {
    art: 'B',
    math: 'A',
    science: 'C',
    honorsCourses: true,
    numberTimesAbsent: 0
}
For this example report card, the GPA is 3.2:
Add the art (3), math (4), and science (2) values for a total of 9. Divide that by the number of courses (3) to arrive at 3.
Because honorsCourses is true, add 0.2 to the GPA, arriving at 3.2.
Write function calculateGPA which accepts a report card object as its only parameter, and returns the numerical GPA.
Assume there's already a function called getGradeValue which provides the numeric value for a letter grade:
let numericValue = getGradeValue( reportCard.math );*/
function calculateGPA(obj) {
  let math = getGradeValue(obj.math);
  let science = getGradeValue(obj.science);
  let art = getGradeValue(obj.art);
  let total = math + science + art;
  let avg = total / 3;
  if (obj.honorsCourses === true) {
    avg += 0.2;
  } else {
    return avg;
  }
  return avg;
}
