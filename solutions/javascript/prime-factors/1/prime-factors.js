//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function checker(num, div) {
  return  num % div === 0
}

export const primeFactors = (num) => {
  let divisor = 2
  const collector = []
  
  while(divisor <= num){
    if (checker(num, divisor)){
      collector.push(divisor)
      num = num / divisor
    }else{
      divisor++
    }
  }
  return collector
};
