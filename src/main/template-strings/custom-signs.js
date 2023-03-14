// @ts-check
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.
/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters
 */
export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}
const geeting = buildSign("Birthday", "Rob");
// => "Happy Birthday Rob!"
console.log(geeting);
/**
 * Build a birthday sign that conditionally formats the return string.
 *
 * @param {number} age
 *
 * @returns {string} template string based on age
 */
export function buildBirthdaySign(age) {
  return `Happy Birthday! What a ${
    age < 50 ? "young" : "mature"
  } fellow you are.`;
}
const string1 = buildBirthdaySign(45);
console.log(string1);
/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name
 * @param {number} year
 *
 * @returns {string} multi-line template string
 */
export function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`;
}
const graduation = graduationFor("Hannah", 2022);
console.log(graduation);
/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 *
 * @param {string} sign
 * @param {string} currency
 *
 * @returns {string} cost to create the sign
 */
export function costOf(sign, currency) {
  const cost = sign.length * 2 + 20;
  return `Your sign costs ${cost}.00 ${currency}.`;
}
