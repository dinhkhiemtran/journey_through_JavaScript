// @ts-check
/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
export function getItem(cards, position) {
  return cards[position];
}
console.log(getItem([1, 2, 4, 1], 2));
/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
export const setItem = (cards, position, replacementCard) => {
  cards[position] = replacementCard;
  return cards;
};
console.log(setItem([1, 2, 4, 1], 2, 6));
/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export const insertItemAtTop = (cards, newCard) => {
  cards.push(newCard);
  return cards;
};
console.log(insertItemAtTop([5, 9, 7, 1], 8));
/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}
console.log(removeItem([3, 2, 6, 4, 8], 2));
/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}
console.log(removeItemFromTop([3, 2, 6, 4, 8]));
/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}
console.log(insertItemAtBottom([5, 9, 7, 1], 8));
/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}
console.log(removeItemAtBottom([8, 5, 9, 7, 1]));
/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {
  return cards.length === stackSize;
}
console.log(checkSizeOfStack([3, 2, 6, 4, 8], 4));
