const suits = ['spade', 'clubs', 'heart', 'dimonds'];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
let result = [];

for (let i = 0; i < suits.length; i++) {
  let inner = [];
  for (let j = 0; j < ranks.length; j++) {
    let obj = {};
    obj.suit = suits[i];
    obj.rank = ranks[j];
    inner.push(obj);
  }
  result.push(inner);
}

<<<<<<< HEAD
console.log(result);
=======
console.log(result);

>>>>>>> 9e0df2930f84b673ba19d17fffb977767f894a21
