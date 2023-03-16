export const twoFer = (name = "you") => {
  return `One for ${name}, one for me.`;
};
console.log(twoFer());
console.log(twoFer('Alice'));
console.log(twoFer('Bob'));
