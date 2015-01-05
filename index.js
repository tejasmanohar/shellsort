function comparator(a, b) {
  return a - b;
}

/**
* Shellsort
* @public
* @param {array} array Array which should be sorted
* @return {array} Sorted array
*/

module.exports = function (arr, gaps, cmp) {
  cmp = cmp || comparator;
  var gap, current;
  for (var k = 0; k < gaps.length; k += 1) {
    gap = gaps[k];
    for (var i = gap; i < array.length; i += gap) {
      current = array[i];
      for (var j = i; j >= gap && cmp(array[j - gap], current) > 0; j -= gap) {
        array[j] = array[j - gap];
      }
      array[j] = current;
    }
  }
  return array;
};
