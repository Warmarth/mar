// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let numberOfBirds = 0
  for (let name of birdsPerDay) {
    numberOfBirds += name
  }
  return numberOfBirds 
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let days= 7
  let startOfDay = (week - 1) * days
  let endOfDay = week * days
  let birds = 0
   for (let index = startOfDay; index <= endOfDay -1; index++) {
     birds += birdsPerDay[index]
   }
   return birds
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let index = 0; index < birdsPerDay.length; index++) {
    if(index % 2 == 0){
      birdsPerDay[index]++
    }
  } 
  return birdsPerDay
}
