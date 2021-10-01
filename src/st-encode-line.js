import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let arr = [];
  let count = 1;
  for (let i = 0; i < str.length; ++i) {
    if (str[i] != str[i + 1]) {
      if (count != 1) arr.push(count);
      arr.push(str[i]);
      count = 1;
    }
    else {
      count++;
    }
  } return arr.join('');
}
