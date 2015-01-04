'use strict';

/**
 * Bubble Sort with O(n^2) complexity
 * @param {Array} input array
 * @returns {Array} shell sorted array
*/

module.exports = function(arr) {
  var h = 1;
  while (h < arr.length / 3) {
    h = 3 * h + 1;
  }

  while (h > 0) {
    for (var i = h; i < arr.length; i += h) {
      for (var n = i; n > 0 && arr[n] < arr[n-h]; n -= h) {
        var arr = arr[n];
        arr[n] = arr[n-h];
        arr[n-h] = arr;
      }
    }
    h = --h / 3;
  }

  return arr;
};
