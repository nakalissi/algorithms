function quicksort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        const pivot = arr[0];

        const minor = arr.filter(y => y < pivot);
        const major = arr.filter(y => y > pivot);
        return quicksort(minor).concat(pivot, quicksort(major));
    }
}
console.time('quicksort');
console.log(quicksort([3, 6, 8, 10, 1, 2, 1, 5, 4, 9, 7, 0]));
console.timeEnd('quicksort');
