/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(params) {
  if (params === 0){
    return 'Lasagna is done.'
  }  
  return !params ? 'You forgot to set the timer.':'Not done, please wait.'
}

export function preparationTime(layers, time = 2) {
  return layers.length * time
}

export function quantities(array) {
  let noodles = 0;
  let sauce = 0;
  for (let value = 0; value <= array.length; value++) {
    if (array[value] === "noodles") {
      noodles += 50;
    } else if (array[value] === "sauce") {
      sauce += 0.2;
    }
  }
  return { noodles, sauce };
}

export function addSecretIngredient(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) continue;
    else if (!b.includes(a[i])) b.push(a[i + 1]);
  }
}

export function scaleRecipe(recipe, num) {
  const result = {};
  let newNum = num * 0.5;
  for (let key in recipe) {
    if (!num || num < 1) {
      return { ...recipe };
    }
    result[key] = recipe[key] * newNum;
  }
  return result;
}


