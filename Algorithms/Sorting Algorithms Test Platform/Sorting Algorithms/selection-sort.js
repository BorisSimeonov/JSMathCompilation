function selectionSort(array) {
    let minIndex, temp,
        len = array.length;
    for (let i = 0; i < len; ++i) {
        minIndex = i;
        for (let j = i + 1; j < len; ++j) {
            if(array[j] < array[minIndex])
                minIndex = j;
        }
        temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
}

module.exports = selectionSort;
