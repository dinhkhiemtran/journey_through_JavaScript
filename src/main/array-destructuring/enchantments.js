/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
  return deck[0];
}
const deck = [5, 9, 7, 1, 8];
console.log(getFirstCard(deck));
/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  const [x, z] = deck;
  return z;
}
const deck1 = [3, 2, 10, 6, 7];
console.log(getSecondCard(deck1));
/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards(deck) {
  let temp = deck[0];
  deck[0] = deck[1];
  deck[1] = temp;
  return deck;
}
const deck2 = [10, 7, 3, 8, 5];
console.log(swapTopTwoCards(deck2));
/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export function discardTopCard(deck) {
  let newDeck = [];
  newDeck.push(deck[0]);
  deck.shift();
  newDeck.push([...deck]);
  return newDeck;
}
const deck3 = [2, 5, 4, 9, 3];
console.log(discardTopCard(deck3));
/** @type Card[] **/
const FACE_CARDS = ["jack", "queen", "king"];
/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards(deck) {
  let newDeck = [];
  newDeck.push(deck[0]);
  deck.shift();
  newDeck.push("jack", "queen", "king");
  newDeck.push(...deck);
  return newDeck;
}
const deck4 = [5, 4, 7, 10];
console.log(insertFaceCards(deck4));
