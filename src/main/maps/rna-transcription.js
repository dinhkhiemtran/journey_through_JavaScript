//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const map = new Map();
map["G"] = "C";
map["C"] = "G";
map["T"] = "A";
map["A"] = "U";
export const toRna = (nucleotides) => {
  let array = nucleotides.split("");
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let element = map[array[i]];
    newArray.push(element);
  }
  return newArray.join("");
};
console.log(toRna("ACGTGGTCTTAA"));
