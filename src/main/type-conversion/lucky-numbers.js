// @ts-check
/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let numb1 = parseInt(array1.join(""));
  let numb2 = parseInt(array2.join(""));
  return numb1 + numb2;
}
console.log(twoSum([1, 2, 3], [0, 7]));
/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let convertValue = value.toString().split("").reverse();
  return value === parseInt(convertValue.join(""));
}
console.log(luckyNumber(1441));
console.log(luckyNumber(123));
/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) return "Required field";
  if (!Number(input) || Number(input) === 0)
    return "Must be a number besides 0";
  return "";
}
console.log(errorMessage("123"));
console.log(errorMessage(""));
console.log(errorMessage("abc"));
