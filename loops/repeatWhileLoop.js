function replenishHand(deck, hand) {
    console.log('replenishHand was called. deck has ' + deck.length + 
                ' cards, and hand has ' + hand.length + ' cards.');
    
    while (hand.length < 5) {
        console.log('Inside the loop');

        let newCard = deck.pop(); // Draw a card from the deck
        console.log('\tnewCard: ', newCard);

        hand.push( newCard ); // Add the drawn card to the hand
        console.log('\tEnd of code block. deck has ' + deck.length + 
                    ' cards, and hand has ' + hand.length + ' cards.');
    }

    return hand; // Return the modified hand
}