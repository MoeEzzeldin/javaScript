/* Write a function isFlagged that accepts a single student score,
    then returns a Boolean indicating whether to flag the score.*/

function isFlagged(student)
    {
        //...const the main score to pass
        const MIN_SCORE_REQUIRED = 70;
        //... declare result using your comparison operator
        let result = student < MIN_SCORE_REQUIRED;
        //... return your result
        return result
    }