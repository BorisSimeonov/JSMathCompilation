class SortController {
    constructor(algorithmsArray) {
        this.algorithmsArray = algorithmsArray;
    }

    runSortingAlgorithms(array) {
        let results = [],
            startTime,
            endTime,
            sortedArray;

        for (let algorithm of this.algorithmsArray) {
            startTime = process.hrtime();
            sortedArray = algorithm.execute(array);
            endTime = process.hrtime(startTime);
            results.push({
                algorithmName: algorithm.name,
                sortDuration: {
                    milliseconds: endTime[0],
                    nanoseconds: endTime[1]
                },
                result: sortedArray
            });
        }
        return SortController.sortResult(results);
    }

    static sortResult(array) {
        return array.sort((a, b) => {
            let aDuration = a.sortDuration,
                bDuration = b.sortDuration;
            let index = aDuration.milliseconds - bDuration.milliseconds;
            if(!index) {
                return aDuration.nanoseconds - bDuration.nanoseconds;
            }
            return index;
        });
    }
}

module.exports = SortController;