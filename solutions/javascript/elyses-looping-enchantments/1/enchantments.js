// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  const result = [];
  stack.forEach((element) => {
    element === card ? result.push(element) : null;
  });
  return result.length;

}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  const result = [];
  for (const iterator of stack) {
    if (iterator % 2 === 0 && type === true) {
      result.push(iterator);
    }
    if (iterator % 2 !== 0 && type === false) {
      result.push(iterator);
    }
  }
  return result.length;
}
