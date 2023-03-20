export const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        swap(array, i, j);
      }
    }
  }
  return array;
};

export const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};
bubbleSort([5, 8, 2, 3, 9, 6, 7, 4, 1]);
console.log('bubbleSort([5, 8, 2, 3, 9, 6, 7, 4, 1]): ', bubbleSort([5, 8, 2, 3, 9, 6, 7, 4, 1]));
