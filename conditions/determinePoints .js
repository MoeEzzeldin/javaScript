/*// Sample card object
let card = {
    suit: '♠️',
    rank: 'king'
}
determinePoints returns the point value assigned to the card, based on the logic in the process diagram.*/
function determinePoints(obj)
{
    if(obj.rank === 'Jack') {
        return 11;
    } else if (obj.rank === 'queen') {
        return 12;
    } else if (obj.rank === 'king') {
        return 13
    } else if (obj.rank === 'ace'){
        return 14
    }else{
        return Number(obj.rank)
    }
}