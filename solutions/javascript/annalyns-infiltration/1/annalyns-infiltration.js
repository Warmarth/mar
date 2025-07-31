// Now help Annalyn free her best friend!

/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */
const knightIsAwake = true;
export function canExecuteFastAttack(knightIsAwake) {
 // Corrected variable name
  if (!knightIsAwake) {
    return true;
  }
  return false;
} 
/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can spy on someone.
 */

const archerIsAwake = true;
const prisonerIsAwake = true;
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if(!knightIsAwake && !archerIsAwake && !prisonerIsAwake){
    return false
  }
  else if(knightIsAwake && archerIsAwake && !prisonerIsAwake){
    return false
  }
  return true
}

/**
 * You'll get caught by the archer if you signal while they're awake.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can send a signal to the prisoner.
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if(!prisonerIsAwake && !archerIsAwake){
    return false
  }
  else if(prisonerIsAwake && !archerIsAwake){
    return true
  }
  return false
}

/**
 * The final stage in the plan: freeing Annalyn's best friend.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 *
 * @returns {boolean} Whether or not you can free Annalyn's friend.
 */ 
const petDogIsPresen = true;
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  if (!knightIsAwake && !archerIsAwake && !prisonerIsAwake && !petDogIsPresent){
    return false
  }
  else if (!knightIsAwake && !prisonerIsAwake && !archerIsAwake && petDogIsPresent){
    return true
  }
  else if (!knightIsAwake && !archerIsAwake && prisonerIsAwake && (petDogIsPresent || archerIsAwake)){
    return true
  }
  else if (!knightIsAwake && prisonerIsAwake && archerIsAwake && !petDogIsPresent){
    return false
  }
  else if (knightIsAwake && !prisonerIsAwake && !archerIsAwake && !petDogIsPresent){
    return false
  }
  else if (knightIsAwake && !prisonerIsAwake && !archerIsAwake && petDogIsPresent){
    return true
  }
  else if (knightIsAwake && prisonerIsAwake && !archerIsAwake && !petDogIsPresent){
    return false
  }
  else if (knightIsAwake && prisonerIsAwake && !archerIsAwake && petDogIsPresent){
    return true
  }
  else if (knightIsAwake && !prisonerIsAwake && archerIsAwake && !petDogIsPresent){
    return false
  }
  else if (knightIsAwake && prisonerIsAwake && archerIsAwake && !petDogIsPresent){
    return false
  }
 
  else if (!knightIsAwake && !prisonerIsAwake && archerIsAwake || petDogIsPresent){
    return false
  }
  return true
}
