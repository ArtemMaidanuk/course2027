

// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Приклад моделі об'єкту карти:
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//
//     color:'', // 'red','black'
// }
let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const cards = []

for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, value: value};
        if (suit === 'diamond' || suit === 'heart') {
            card.color = 'red'
        } else {
            card.color = 'black'
        }
        cards.push(card);
    }
}
console.log(cards);
//
//      - знайти піковий туз
//
let cardAce = cards.find(value => value.cardSuit === 'spade' || value.value === 'ace');
console.log(cardAce);

//  - всі шістки
let card = cards.filter(value => value.value === '6');
console.log(card);
// - всі червоні карти
let cardRed = cards.filter(value => value.color === 'red');
console.log(cardRed);
// - всі буби
let cardDiamond = cards.filter(value => value.cardSuit === 'diamond');
console.log(cardDiamond);
// - всі трефи від 9 та більше

let cardClubs = cards.filter(value => value.cardSuit === 'clubs' && (value.value === '9' || value.value === '10'
    || value.value === 'jack' || value.value === 'king' || value.value === 'ace'));
console.log(cardClubs);

// Взяти описану колоду карт, та за допомогою reduce "упакувати" всі карти по "мастях" в об'єкт

const cardReduce = cards.reduce((previousValue, currentValue) => {
    switch (currentValue.cardSuit) {
        case 'clubs':
            previousValue.clubs.push(currentValue.value);
            break;
        case 'diamond':
            previousValue.diamond.push(currentValue.value);
            break;
        case 'heart':
            previousValue.heart.push(currentValue.value);
            break;
        case 'spade':
            previousValue.spade.push(currentValue.value);
            break;
    }
    return previousValue;
}, {
    spade: [], diamond: [], heart: [], clubs: []
})
console.log(cardReduce)