/*Write the function hasImproved which accepts the last three scores (from oldest to newest), 
and returns a Boolean indicating whether each score is greater than or equal to the one that precedes it.*/
    //... declare your function and decide youre parameters for 3 scores
function hasImproved(score1, score2, score3)
    {
        //... return the boolen value of comparing the 3 scores using '&&'
        return score2 >= score1 && score3 >= score2;
    }