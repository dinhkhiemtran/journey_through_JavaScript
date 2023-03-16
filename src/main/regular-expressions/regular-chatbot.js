// @ts-nocheck

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
    const regex = /^chatbot/i;
    return regex.test(command)
}
const test = isValidCommand("Chatbot, play a song from the 80's.");
// => True
console.log(test);
const test1 =isValidCommand("Hey Chatbot, where is the closest pharmacy?");
// => False
console.log(test1);
const test2 = isValidCommand("CHATBOT, do you have a solution for this challenge?");
// => True
console.log(test2);
/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  const regex = new RegExp(/emoji\S*/, "gi")
  return message.replace(regex,"");
}
const removedEmoji = removeEmoji("I love playing videogames emoji3465 it's one of my hobbies");
console.log(removedEmoji);

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export const IS_VALID = "Thanks! You can now download me to your phone.";
export const NOT_VALID = "Oops, it seems like I can't reach out to ";
export function checkPhoneNumber(number) {
    const regex = /\(\+\d{2}\)\s\d{3}\-\d{3}\-\d{3}/gm;
    return number.match(regex) ? IS_VALID : NOT_VALID + number;
}
console.log(checkPhoneNumber('(+34) 659-771-594'));
// => "Thanks! You can now download me to your phone."
console.log(checkPhoneNumber('659-771-594'));
// => "Oops, it seems like I can't reach out 
/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
    const regex = /\S*\.\S*/g
    return userInput.match(regex);
}
console.log(getURL('I learned a lot from exercism.com'));
/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
    const regex = /, /;
    let split = fullName.split(regex);
    return `Nice to meet you, ${split[1]} ${split[0]}`;
}
let str = 'Smith, John';
console.log(niceToMeetYou(str));