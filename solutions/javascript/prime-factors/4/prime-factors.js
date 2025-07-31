export const primeFactors = (num) => {
  const collector = []
  for (let divisor = 2; divisor <= num;) {
    num % divisor === 0 
    ? collector.push(divisor) && (num /= divisor) 
    : divisor++
  };
  return collector
};
