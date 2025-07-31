// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
function summer(n) {
  let newValue = n.join('')
  return Number(newValue)
}
export function twoSum(array1, array2) {
  const val1 = summer(array1)
  const val2 = summer(array2)
  return val1 + val2
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let ar = value.toString().split("");
  let b = ar.reverse().join("");
  const c = value == b ? true : false;
  return c;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return "Required field";
  } else if (!Number(input)) {
    return "Must be a number besides 0";
  } else {
    return '' ;
  }
}
