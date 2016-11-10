function bubbleSort(array) {
    let len = array.length;
    for(let j = len-1; j >= 0; --j) {
        for(let i = 1; i <= j; ++i) {
            if(array[i-1] > array[i]) {
                let temp = array[i];
                array[i] = array[i-1];
                array[i-1] = temp;
            }
        }
    }
    return array;
}

module.exports = bubbleSort;