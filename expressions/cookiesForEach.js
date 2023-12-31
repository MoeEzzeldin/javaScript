function calculateCookieCount(one, two, three){
    //. Define a constant for the number of cookies per student
    const COOKIES_PER_STUDENT = 2;
    //.. Calculate the total number of students
    let numOfStudents = one + two + three;
    //... Calculate the number of cookies required
    let numOfCookiesRequired = numOfStudents * COOKIES_PER_STUDENT;
    //.... Return the number of cookies
    return numOfCookiesRequired;
}