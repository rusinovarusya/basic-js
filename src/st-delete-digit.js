import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  function createNumber(arr) {
    let num = 0;
    let length = arr.length;
    for (let i = 0; i < length; ++i) {
      num += arr[i] * Math.pow(10, length - i - 1);
    } return num;
  }

  let max = Math.floor(n / 10);
  const digitals = String(n).split('');
  for (let i = 0; i < digitals.length; ++i) {
    let tmp = [];
    digitals.forEach(elem => tmp.push(elem));
    let d = tmp.splice(i, 1);
    let newNum = createNumber(tmp);
    if (newNum > max) max = newNum;
  } return max;
}
