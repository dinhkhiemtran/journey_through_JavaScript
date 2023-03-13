// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map((e) => e * 2);
}
const deck = [1, 2, 3, 4, 10];
let newArray = seeingDouble(deck);
console.log(newArray);

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  let newArray = [];
  deck.filter((e) => (e === 3 ? newArray.push([e,e,e]) : newArray.push(e)));
  let flat = newArray.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    []
  );
  return flat;
}
const deck1 = [1, 3, 9, 3, 7];
let newArray1 = threeOfEachThree(deck1);
console.log(newArray1);

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const middle = deck.length / 2 ;
  return deck.slice(middle - 1, middle + 1);
}
const deck2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray2 = middleTwo(deck2);
console.log(newArray2);

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
    let mid = deck.length / 2;
    deck.splice(mid, 0, deck[0]);
    deck.splice(mid, 0, deck[deck.length - 1]);
    deck.shift();
    deck.pop();
    return deck;
}
const deck3 = [1, 2, 3, 5, 6, 10];
console.log(sandwichTrick(deck3));

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
    let newArray = [];
    deck.filter(e => e === 2 ? newArray.push(e) : [])
    return newArray;
}
const deck4 = [1, 2, 3, 4, 10, 2];
let numberToday = twoIsSpecial(deck4);
console.log(numberToday);
/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
    for (let i = 0; i < deck.length; i++) {
        let max = i;
        for (let j = i + 1; j < deck.length; j++) {
            if (deck[max] > deck[j]) {
                max = j;
            }
        }
        if (max != i) {
            let temp = deck[max];
            deck[max] = deck[i];
            deck[i] = temp;
        }
    }
    return deck;
}
const deck5 = [10, 1, 5, 3, 2, 8, 7];
const sorted = perfectlyOrdered(deck5);
// => [1, 2, 3, 5, 7, 8, 10]
console.log(sorted);

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
    let reverseArray = [];
    for (let i = deck.length - 1; i >= 0; i--) {
        reverseArray.push(deck[i]);
    }
    return reverseArray;
}
const deck6 = [10, 1, 5, 3, 2];
// => [2, 3, 5, 1, 10]
console.log(reorder(deck6));
