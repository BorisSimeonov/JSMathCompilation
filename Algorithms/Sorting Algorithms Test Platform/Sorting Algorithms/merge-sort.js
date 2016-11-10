function merge(left, right) {
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while(l < lLen && r < rLen){
        if(left[l] < right[r]){
            result.push(left[l++]);
        }
        else{
            result.push(right[r++]);
        }
    }

    return result.concat(left.slice(l)).concat(right.slice(r));
}

function mergeSort(array) {
    let len = array.length;
    if (len < 2) {
        return array;
    }
    let midIdx = Math.floor(len / 2),
        left = array.slice(0, midIdx),
        right = array.slice(midIdx);
    return merge(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;