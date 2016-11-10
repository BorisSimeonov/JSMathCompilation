function insertionSort(array) {
    let i, j, el,
        len = array.length;

    for (i = 1; i < len; ++i) {
        el = array[i];
        j = i;
        while (j > 0 && array[j - 1] > el) {
            array[j - 1] = array[j];
            --j;
        }
        array[j] = el;
    }
    return array;
}

module.exports = insertionSort;
