//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const GIGASECOND = 1e12;
export const gigasecond = (data) => {
    return new Date(data.getTime() + GIGASECOND);
};

console.log(gigasecond(new Date(Date.UTC(2011, 3, 25))));
  