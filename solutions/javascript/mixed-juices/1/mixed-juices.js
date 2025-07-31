// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  while (name === String(name)) {
    if (name === "Pure Strawberry Joy") {
      return 0.5;
    } else if (name === "Energizer" || name === "Green Garden") {
      return 1.5;
    } else if (name === "Tropical Island") {
      return 3;
    } else if (name === "All or Nothing") {
      return 5;
    } else {
      return 2.5;
    }
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limesCut = 0;
  let i = 0;
  while (i < limes.length) {
    if (wedgesNeeded <= 0) {
      break;
    } else {
      switch (limes[i]) {
        case "small":
          wedgesNeeded -= 6;
          limesCut++;
          break;
        case "medium":
          wedgesNeeded -= 8;
          limesCut++;
          break;
        case "large":
          wedgesNeeded -= 10;
          limesCut++;
          break;
      }
    }
    i++;
  }
  return limesCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0;
  let store = [];
  while (i < orders.length) {
    const juice = timeToMixJuice(orders[i]);
    if (timeLeft > 0) {
      timeLeft -= juice;
    } else {
      store.push(orders[i]);
    }
    i++;
  }
  return store;
}