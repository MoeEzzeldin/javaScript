/*To begin your card game, you must write the createDeck() function. 
It accepts two arrays as parameters—an array of suits and an array of ranks. 
The createDeck function generates and returns a single array of card objects, 
the deck. Each card object has properties suit and rank.
For example, this code:
let newDeck = createDeck(['clubs', 'spades'], ['2', '3'] );
console.log(newDeck);
produces output like this:
[
  { suit: 'clubs', rank: '2' },
  { suit: 'clubs', rank: '3' },
  { suit: 'spades', rank: '2' },
  { suit: 'spades', rank: '3' }
]
Write the createDeck function: */
//. declare function
function createDeck(suit, rank){
    //..creat the returned arr
        let deck = [];
    //... loop through both arrays 'nested loops'
        for(let i = 0; i < suit.length; i++){
            for(let j = 0; j < rank.length; j++){
    //....declare obj to store values from suit[i] and rank[j]
            let card = {};
            card.suit = suit[i];
            card.rank = rank[j];
    //.....push your obj in your declared arr 'deck'
            deck.push(card)
            }
        }
    //...... return deck
        return deck
    }