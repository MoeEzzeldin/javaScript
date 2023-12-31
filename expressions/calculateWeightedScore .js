// Example calculation:

// Weighted part 1 score: 100 * (50/100) = 50
// Weighted part 2 score: 90 * (30/100) = 27
// Weighted part 3 score: 80 * (20/100) = 16
// Final score: 50 + 27 + 16 = 93
// Write a function calculateWeightedScore that accepts an exam object and returns the weighted exam score.

    //... declare the function and assign it the object exam.
function calculateWeightedScore(exam)
    {
        //... calculate the score of each part of the exam.
        let firstPart = exam.partOne * (50 / 100);
        let secondPart = exam.partTwo * (30 / 100);
        let thirdPart = exam.partThree * (20 / 100)
        //... calculate result of three parts.
        let result = firstPart + secondPart + thirdPart;
        //...return the result
        return result;
    }
    