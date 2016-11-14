function insertionSort(arr) {
    let i, j, val;

    for (i = 0; i < arr.length; ++i) {
        val = arr[i];
        j = i - 1;
        for (; j > -1 && arr[j] > val; --j) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = val;
    }
    return arr;
}

module.exports = insertionSort;
