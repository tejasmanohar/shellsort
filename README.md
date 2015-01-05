#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Shellsort

[Shellsort](http://en.wikipedia.org/wiki/Shellsort) implementation wth O(n^3/2) complexity based on [JavaScript Algorithms](https://github.com/mgechev/javascript-algorithms).

> Shellsort, also known as Shell sort or Shell's method, is an in-place comparison sort. It can be seen as either a generalization of sorting by exchange (bubble sort) or sorting by insertion (insertion sort).[1] The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared.

## Install

```sh
$ npm install --save shellsort
```

## Usage

```js
var shellsort = require('shellsort');

// Ascending order

shellsort([3,1,4,1,5,9,2,6,5,4]);
// => [1,1,2,3,4,4,5,5,6,9]

shellsort([9,2,8,6,1,3]);
// => [1,2,3,6,8,9]

shellsort([5,2,4,6,1,3]);
// => [1,2,3,4,5,6]

// Descending order

function comparator(a, b) { return b - a; }

shellsort([5,2,2,6,1,3], comparator);
// => [6,5,3,2,2,1]

shellsort([0,0,0,0,0,-1], comparator);
// => [0,0,0,0,0,-1]

// Ascending sort arrays of objects

var people = [
  {name: 'Sindre', age: 30, place: 2},
  {name: 'Passy', age: 25, place: 1},
  {name: 'Stephen', age: 40, place: 4},
  {name: 'Matt', age: 35, place: 3}
];

function comparePeople(a, b) { return a.age - b.age };

shellsort(people, comparePeople);
/*
=> [
  {"name": 'Passy', "age": 25, "place": 1},
  {"name": 'Sindre', "age": 30, "place": 2},
  {"name": 'Matt', "age": 35, "place": 3},
  {"name": 'Stephen', "age": 40, "place": 4}
]
*/
```

## License

MIT © [Tejas Manohar](https://tejas.io)


[npm-url]: https://npmjs.org/package/shellsort
[npm-image]: https://badge.fury.io/js/shellsort.svg
[travis-url]: https://travis-ci.org/tejasmanohar/shellsort
[travis-image]: https://travis-ci.org/tejasmanohar/shellsort.svg?branch=master
[daviddm-url]: https://david-dm.org/tejasmanohar/shellsort.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/tejasmanohar/shellsort
