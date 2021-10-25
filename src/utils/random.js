/**
 * @param {number} max
 * @param {number} min
 * @returns {number}
 */
export const randomNumber = function (max, min = 0) {
  return min + Math.floor(Math.random() * (max - min));
};

/**
 *
 * @param {Array} arr
 * @returns {any}
 */
export const randomArrayElement = function (arr) {
  return arr[randomNumber(arr.length)];
};
