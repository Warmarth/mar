/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export const pizzaPrice = (pizza, ...extras) => {
  const pizzaType = { Margherita: 7, Caprese: 9, Formaggio: 10 };
  const extraType = { ExtraSauce: 1, ExtraToppings: 2 };

  if (extras.length === 0 && pizza) {
    return pizzaType[pizza];
  }else if (extras.length > 0 && pizza) {
    return pizzaType[pizza] + extras.map((extra) => extraType[extra]).reduce((a, b) => a + b);
  }
};

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */


export function orderPrice(pizzaOrder) {
  let total = 0
  if (pizzaOrder.length === 0) {
    return 0;
  } 
  for (let name of pizzaOrder) {
    const {pizza, extras} = name
    total += pizzaPrice(pizza, ...extras) 
  }
  return total
}