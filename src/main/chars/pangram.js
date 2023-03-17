//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const getAlphabet = () => {
  let alphabet = "";
  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    alphabet += String.fromCharCode(i);
  }
  return alphabet;
};
export const isPangram = (phrase) => {
  const regex = /\s/g;
  const alphabet = getAlphabet();
  phrase = phrase.toLowerCase().replace(regex, "");
  for (let i = 0; i < alphabet.length; i++) {
    if (phrase.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
};
