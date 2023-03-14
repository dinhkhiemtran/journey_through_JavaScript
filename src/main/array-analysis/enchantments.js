// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.
/**
 * Get the position (index) of the card in the given stack
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} position of the card in the stack
 */
export function getCardPosition(stack, card) {
  let index = -1;
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === card) {
      index = i;
    }
  }
  return index;
}
function getCardPositionIndexOf(stack, card) {
  return stack.indexOf(card);
}
const card = 2;
let numbNeeded = getCardPosition([9, 7, 3, 2], card);
console.log(numbNeeded);
/**
 * Determine if the stack contains the card
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {boolean} true if card is in the stack, false otherwise
 */
export function doesStackIncludeCard(stack, card) {
  for (let i = 0; i < stack.length; i++) {
    if (stack.includes(card)) {
      return true;
    }
  }
  return false;
}
const card1 = 3;
const isPresent = doesStackIncludeCard([2, 3, 4, 5], card1);
console.log(isPresent);
/**
 * Determine if each card is even
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if all cards are even, false otherwise
 */
export function isEachCardEven(stack) {
  return stack.every((e) => e % 2 === 0);
}
const isEven = isEachCardEven([2, 4, 6, 7]);
console.log(isEven);
/**
 * Check if stack contains odd-value card
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if the array contains odd card, false otherwise
 */
export function doesStackIncludeOddCard(stack) {
  return stack.some((e) => e % 2 !== 0);
}
const isOdd = doesStackIncludeOddCard([3, 2, 6, 4, 8]);
console.log(isOdd);
/**
 * Get the first odd card from the stack
 *
 * @param {number[]} stack
 *
 * @returns {number | undefined} the first odd value
 */
export function getFirstOddCard(stack) {
  return stack.find(e => e % 2 !== 0);
}
const numberNeeded1 = getFirstOddCard([4, 2, 8, 7, 9]);
console.log(numberNeeded1);
/**
 * Determine the position of the first card that is even
 *
 * @param {number[]} stack
 *
 * @returns {number} position of the first card that is even
 */
export function getFirstEvenCardPosition(stack) {
   return stack.findIndex(e => e % 2 === 0);
}
const numberNeeded2 = getFirstEvenCardPosition([5, 2, 3, 1]);
console.log(numberNeeded2);
