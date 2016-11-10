//TODO: to implement passing of comparator function as argument to algorithms
let SortAlgorithm = require('./Classes/sort-algorithm-class');
let SortController = require('./Classes/sort-controller');
let bubbleSort = require('./Sorting Algorithms/bubble-sort');
let selectionSort = require('./Sorting Algorithms/selection-sort');
let insertionSort = require('./Sorting Algorithms/insertion-sort');
let mergeSort = require('./Sorting Algorithms/merge-sort');
//TODO: include Quicksort and Heap Sort

let bubbleSortAlg = new SortAlgorithm('Bubble Sort', bubbleSort);
let selectioneSortAlg = new SortAlgorithm('Selection Sort', selectionSort);
let insertionSortAlg = new SortAlgorithm('Insertion Sort', insertionSort);
let mergeSortAlg = new SortAlgorithm('Merge Sort', mergeSort);

let controller = new SortController([
    bubbleSortAlg,
    selectioneSortAlg,
    insertionSortAlg,
    mergeSortAlg
]);


let result = controller.runSortingAlgorithms([
    22, 11, 2, 33, 4, 5, 6, 1, 0, 11, 2, 33, 4, 99, 5, 6, 1, 0, 11, 2
]);
for (let item of result) {
    console.log(`->> ${item.algorithmName}`/*\t\t${item.result}*/);
    console.log(`Time: ${item.sortDuration.milliseconds},${
        item.sortDuration.nanoseconds} ms.`);
    console.log(item.result);
}