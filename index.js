function comparator(a, b) {
  return a - b;
}

/**
* Shellsort
* @public
* @param {Array} input array
* @param {Array} gap values
* @param {Function} comparator
* @return {Array} Sorted array
*/

module.exports = function (arr, gaps, cmp) {
  cmp = cmp || comparator;
  var gap, current;
  for (var k = 0; k < gaps.length; k += 1) {
    gap = gaps[k];
    for (var i = gap; i < arr.length; i += gap) {
      current = arr[i];
      for (var j = i; j >= gap && cmp(arr[j - gap], current) > 0; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = current;
    }
  }
  return arr;
};
