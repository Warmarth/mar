//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (num) => {
  let divisor = 2
  const collector = []
  for (let divisor = 2; divisor <= num;) {
    num % divisor === 0 ?
    collector.push(divisor) && (num /= divisor) : divisor++
  }
  return collector
};
