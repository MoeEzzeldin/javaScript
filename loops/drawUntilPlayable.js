/*In Crazy Eights, if a player doesn't have a card to play in their hand,
that player must draw cards from the deck until they get a card to play.
Write a function drawUntilPlayable, which accepts a single parameters which is
a card object describing the target card. This object has rank and suit properties.
Assume you can call the drawCard() function to get the next card from the deck. It returns a card object.
drawUntilPlayable repeatedly calls drawCard until receiving a card which matches either the rank or suit of the target card.
drawUntilPlayable returns an array of card objects containing every card it drew during the turn.*/
function drawUntilPlayable(card) {
  let hand = [];
  let topCard = drawCard();
  while (topCard.rank !== card.rank && topCard.suit !== card.suit) {
    hand.push(topCard);
    topCard = drawCard();
  }
  hand.push(topCard);
  return hand;
}
