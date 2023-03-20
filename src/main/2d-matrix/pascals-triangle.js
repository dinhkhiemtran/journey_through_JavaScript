//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const rows = (numRows) => {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  const prevTriangle = rows(numRows - 1);
  const lastRow = prevTriangle[prevTriangle.length - 1];
  const newRow = [...lastRow.map((value, index) => (index === 0) ? 1 : lastRow[index-1] + value), 1];
  return [...prevTriangle, newRow];
};


