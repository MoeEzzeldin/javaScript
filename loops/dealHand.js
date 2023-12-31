/*For this challenge, you'll write a function to deal a hand of cards to a player.
Write a function dealHand that accepts one parameter, the number of cards in a hand.
The function returns an array of card objects (a hand), of the desired length.
Assume you can call the drawCard() function to get the next card from the deck. It returns a card object. */
//. declare function
function dealHand(num) {
  //.. creat empty array to store obj passed in
  let hand = [];
  //... loop until i reach number passed in param
  for (let i = 0; i < num; i++) {
    //.... recieve a card from drawCard
    let newCard = drawCard();
    //..... push card in hand
    hand.push(newCard);
  }
  //...... return hand
  return hand;
}
