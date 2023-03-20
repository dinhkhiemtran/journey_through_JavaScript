export const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        if (i != min) {
            swap(array, i, min);
        }
    }
    return array;
}

export const swap = (array, i, min) => {
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  };
console.log(selectionSort([5, 8, 2, 3, 9, 6, 7, 4, 1]));