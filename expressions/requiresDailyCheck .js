/* Write the function requiresDailyCheck which accepts a student information object,
 then returns a Boolean indicating whether the student meets the criteria for a daily check-in.

Example student information object:

let info = {
    quizAlert: true,
    hwAlert: false,
    absences: 0,
    lastExam: 70
}*/

function requiresDailyCheck(info)
    {
    //... return the boolean 
return info.quizAlert === true 
    && info.hwAlert === true 
    || info.absences > 0
    || info.lastExam < 70;
    }