//
// @ts-nocheck
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.
import { notify } from "../main/notifier";
import { order } from "../main/grocer";
const SUCCESS = { message: "SUCCESS" };
const ERROR = { message: "ERROR" };
/**
 * @return void
 */
export function onSuccess() {
  notify(SUCCESS);
}
/**
 * @return void
 */
export function onError() {
  notify(ERROR);
}
/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 * @return void
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  return order(query, onSuccessCallback, onErrorCallback);
}
/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */
export function postOrder(variety, quantity) {
  //implement the postOrder function to create a query and order
  return order({ variety, quantity }, onSuccess, onError);
}
