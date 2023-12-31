/* Write the function flagHomework which accepts a score object, and returns a Boolean indicating whether to flag the student's homework score.

Example score object:

let score = {
    hw1: 100,
    hw2: 90,
    hw3: 70,
    hw4: 80
}
Example average calculation:

Score Total (add all scores): 100 + 90 + 70 + 80 = 340
Calculate the average (score_total / score_count): 340 / 4 = 85 */

function flagHomework(score){
    //.declare const standard score
    const STANDARD_SCORE = 70;
    //.. calculate scores
    let totalScore = (score.hw1 
                    + score.hw2
                    + score.hw3
                    + score.hw4);
    return totalScore /(Object.keys(score).length) < STANDARD_SCORE || Object.values(score).includes(0); 
}