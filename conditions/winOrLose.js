/*Write a function called winOrLose, which accepts two parameters:

The players guess, which is either "red" or "black".
The next card, which is an object that has a property color.
If the player's guess and the color of the next card are the same,
the function returns "win". If not, the function returns "lose".*/

function winOrLose(guess, card)
{
    let result = '';
    if(guess === card.color){
        result = 'win'
    }else{
        result = 'lose'
    }
    return result
}