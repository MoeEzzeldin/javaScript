/*Write a function isHighQuizAvg that accepts a weekly score object,
 then returns a Boolean indicating whether they have a quiz average of 80 or more.

Example score object:

let scores = {
    quiz1: 100,
    quiz2: 90,
    quiz3: 70,
    quiz4: 60
}
Example calculation:

Score Total (add all scores): 100 + 90 + 70 + 60 = 400
Calculate the average (score_total / score_count): 320 / 4 = 80*/

function isHighQuizAvg(scores)
{
    let totalScores = scores.quiz1 
                    + scores.quiz2 
                    + scores.quiz3
                    + scores.quiz4;
    let result = (totalScores / Object.keys(scores).length) >= 80 ;
    return result
}
