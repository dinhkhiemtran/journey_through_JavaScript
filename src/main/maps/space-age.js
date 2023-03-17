//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const EARTH_YEAR = 31557600
export const RATIO = new Map();
RATIO["mercury"] = 0.2408467;
RATIO["venus"] = 0.61519726;
RATIO["earth"] = 1;
RATIO["mars"] = 1.8808158;
RATIO["jupiter"] = 11.862615;
RATIO["saturn"] = 29.447498;
RATIO["uranus"] = 84.016846;
RATIO["neptune"] = 164.79132;
export const age = (planet, seconds) => {
  return Number((seconds / EARTH_YEAR / RATIO[planet]).toFixed(2))
};
console.log(age("earth", 1000000000));
