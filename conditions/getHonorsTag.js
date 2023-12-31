/*To earn the "High Honors" tag, the student must:
achieve a grade point average (GPA) of 3.5 or greater
not have earned any 'D' grades
not have more than 3 absences during the grading period
If a student doesn't earn "High Honors", they may earn the "Honors" tag. To achieve this, the student must:
achieve a grade point average (GPA) of 3.0 or greater
not have earned any 'D' grades
not have more than 3 absences during the grading period
If the student earns neither of these, the tag remains empty ("").
Write the function getHonorsTag which accepts a report card as its sole parameter, 
and returns a string stating the honors earned by the student.
Assume there's already a function called calculateGPA which provides GPA given a report card:
let GPA = calculateGPA( reportCard );*/
function getHonorsTag(obj) {
  let total = calculateGPA(obj);
  let keys = Object.values(obj);
  if (keys.includes('D') || obj.numberTimesAbsent > 3) {
    return '';
  } else if (total >= 3.5) {
    return 'High Honors';
  } else if (total < 3.5 && total >= 3) {
    return 'Honors';
  }
}
