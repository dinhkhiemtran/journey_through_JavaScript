// @ts-check
/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let count = 0;
  stack.forEach((e) => (e === card ? count++ : 0));
  return count;
}
const cardType = 3;
let countCards = cardTypeCheck([1, 2, 3, 4], cardType);
console.log(countCards);
/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let rest = type ? 0 : 1;
  let count = 0;
  for (let e of stack) {
    e % 2 === rest ? count++ : 0;
  }
  return count;
}
const test1 = determineOddEvenCards([1, 2, 3, 1, 5, 6], true);
// => 2
console.log(test1);
const test2 = determineOddEvenCards([1, 2, 3, 1, 5, 6], false);
// => 4
console.log(test2);
