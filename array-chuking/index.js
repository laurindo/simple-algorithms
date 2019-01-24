/**
 * Given an array and chunk size, divide the array into many subarrays
 * where each subarray is of length size
 * 
 * Examples:
 * ========================
 * 
 * chunk([1,2,3,4], 2);         -> [[1,2], [3,4]]
 * chunk([1,2,3,4,5], 2)        -> [[1,2], [3,4], [5]]
 * chunk([1,2,3,4,5,6,7,8], 3)  -> [[1,2,3], [4,5,6], [7,8]]
 */

class ArrayChunking {
    static solution01(array, size) {
        const chunked = [];
        for (let element of array) {
            const last = chunked[chunked.length -1];
            if (!last || last.length === size) {
                chunked.push([element]);
            } else {
                last.push(element);
            }
        }
        return chunked;
    }

    static solution02(array, size) {
        const chunked = [];
        let index = 0;
        while(index < array.length) {
            const r = array.slice(index, index + size);
            chunked(r);
            index += size;
        }
        return chunked;
    }
}

module.exports = ArrayChunking;