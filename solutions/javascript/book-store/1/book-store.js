//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  let total = books.length * 800;
  let discount = { 5: 0.25, 4: 0.2, 3: 0.1, 2: 0.05 };
  let unique = [];

  while (books.length > 0) {
    unique.push(new Set(books).size);
    for (let book of new Set(books)) {
      books.splice(books.indexOf(book), 1);
    }
  }

  while (unique.includes(3) && unique.includes(5)) {
    unique.splice(unique.indexOf(3), 1);
    unique.splice(unique.indexOf(5), 1);
    unique.push(4, 4);
  }
  return (
    total -
    unique.reduce((acc, val) => acc + (discount[val] || 0) * 800 * val, 0)
  );
};

