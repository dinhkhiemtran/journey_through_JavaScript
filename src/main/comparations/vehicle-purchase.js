// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
    if (kind === "car" || kind === "truck") {
        return true;
    }
    return false;
}
console.log(needsLicense("car"));
console.log(needsLicense("bike"));

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
    let rest = " is clearly the better choice.";
    if (option1.localeCompare(option2) > 0) {
        return option2 + rest;
    }
    return option1 + rest;
}
console.log(chooseVehicle("Wuling Hongguang", "Toyota Corolla"));
console.log(chooseVehicle("Volkswagen Beetle", "Volkswagen Golf"));

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
    if (age > 10) {
        return 0.5 * originalPrice;
    } else if (age < 3) {
        return 0.8 * originalPrice;
    }
    return 0.7 * originalPrice;
}
console.log(calculateResellPrice(1000, 1));
console.log(calculateResellPrice(1000, 5));
console.log(calculateResellPrice(1000, 15));
