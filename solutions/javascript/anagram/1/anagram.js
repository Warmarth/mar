//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word1, word2) => {
   const ana = word1
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("")
    .toLowerCase();
  return word2.filter((word) => {
    if (word.toLowerCase() !== word1.toLowerCase())
      return (
        ana ===
        word
          .split("")
          .sort((a, b) => a.localeCompare(b))
          .join("")
          .toLowerCase()
      );
  });
};
