/*Write a function getGradeValue which accepts a letter grade as its only parameter, 
and returns the numeric value associated with that grade.
You can assume that letterGrade is 'A', 'B', 'C', or 'D'.*/
function getGradeValue(letterGrade) {
  let grade = 0;
  if (letterGrade === 'A') {
    grade = 4;
  } else if (letterGrade === 'B') {
    grade = 3;
  } else if (letterGrade === 'C') {
    grade = 2;
  } else {
    grade = 1;
  }
  return grade;
}
