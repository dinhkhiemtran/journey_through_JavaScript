//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const BOOK_COST = 800;
export const DISCOUNT = new Map();
DISCOUNT["1"] = 0;
DISCOUNT["2"] = 0.05;
DISCOUNT["3"] = 0.1;
DISCOUNT["4"] = 0.2;
DISCOUNT["5"] = 0.25;
export const cost = (books) => {
  let total = 0;
  const subSets = [];
  while (books.length > 0) {
    const subSet = [];
    
    for (let i = 0; i < books.length; i++) {
      if (!subSet.includes(books[i])) {
        subSet.push(books[i]);
        books.splice(i, 1);
        i--;
      }
    }
    subSets.push(subSet);
  }
  console.log('subSets: ', subSets);
  for (let j = 0; j < subSets.length; j++) {
    for (let k = j + 1; k < subSets.length; k++) {
      if (subSets[j].length === 5 && subSets[k].length === 3) {
        subSets[k].push(subSets[j].pop());
      }
    }
  }
  subSets.forEach((subset) => {
    total += subset.length * (BOOK_COST - BOOK_COST * DISCOUNT[subset.length]);
  });
  return total;
};
console.log('cost: ', cost([1, 2, 3]));

