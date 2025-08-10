//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
 function sortString(x) {
    return x
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("")
      .toLowerCase();
  }

export const findAnagrams = (word1, word2) => {
  const ana = sortString(word1);
  return word2.filter((word) => {
    if (word.toLowerCase() !== word1.toLowerCase())
      return ana === sortString(word);
  });
};
