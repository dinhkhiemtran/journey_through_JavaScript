// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
    const regex = /^chatbot/i;
    return regex.test(command);
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
export function checkPhoneNumber(number) {
  throw new Error("Please implement the checkPhoneNumber function");
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  throw new Error("Please implement the userInput function");
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  throw new Error("Please implement the fullName function");
}
