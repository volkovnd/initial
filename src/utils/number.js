/**
 *
 *
 * @param {number} max
 * @param {number} min
 * @returns {number}
 */
export function random(max, min = 0) {
  return min + Math.random() * (max - min);
}

/**
 *
 *
 * @param {number} val
 * @returns {number}
 */
export function toNumber(val) {
  return parseFloat(val);
}

/**
 *
 *
 * @param {number} val
 * @returns {number}
 */
export function toInteger(val) {
  return parseInt(val, 10);
}
