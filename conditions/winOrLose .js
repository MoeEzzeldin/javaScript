/*winOrLose accepts three parameters:

gameMode, a string which is either 'easy' or 'hard'
redBlackCorrect, a boolean that says whether the color guess was correct
highLowCorrect, a boolean that says whether the high or low guess was correct
winOrLose returns the string 'win' or 'lose' based on the logic in the process diagram.*/
function winOrLose (gameMode,redBlackCorrect, highLowCorrect){
    let game = '';
    if (gameMode === 'hard'){
        if(redBlackCorrect === true 
        && highLowCorrect === true){
            return game = 'win';
        }else{
            return game = 'lose';
        }
    }else if(gameMode === 'easy'){
            if(redBlackCorrect === true
            || highLowCorrect === true){
            return game = 'win';
    }else{
            return game = 'lose';
    }
}
}