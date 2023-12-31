/* Write a function hasPerfectAttendance that accepts a student information object,
then returns a Boolean indicating whether the student has perfect attendance (exactly zero absences).

let info = {
    absences: 2,
    lastExam: 70
}*/
//... declare the function 
function hasPerfectAttendance(info)
{
    //... const the attendance policy for the reward
    const ATTENDANCE_POLICY = 0;
    //... declare your result var and assign the right operator
    let result = info.absences === 0;
    // return your result
    return result;
}