const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 *
 * @param {object} key
 * @param {PropertyKey} key
 * @returns {boolean}
 */
export function hasOwn(target, key) {
  return hasOwnProperty.apply(target, key);
}

/**
 *
 * @param {any} value
 * @returns {boolean}
 */
export function isPrimitive(source) {
  return (
    typeof source === "number" ||
    typeof source === "string" ||
    typeof source === "boolean" ||
    typeof source === "symbol"
  );
}

/**
 *
 * @param {any} source
 * @returns {any}
 */
export function clone(source) {
  if (!source && typeof source !== "object") {
    throw new Error("error arguments", "shallow clone");
  }

  const targetObj = Array.isArray(source) ? [] : {};

  for (var keys in source) {
    if (hasOwnProperty.call(source, keys)) {
      if (source[keys] && typeof source[keys] === "object") {
        targetObj[keys] = source[keys];
      }
    }
  }

  return targetObj;
}

/**
 *
 * @param {any} source
 * @returns {any}
 */
export function deepClone(source) {
  if (!source && typeof source !== "object") {
    throw new Error("error arguments", "shallow clone");
  }

  const targetObj = Array.isArray(source) ? [] : {};

  for (var keys in source) {
    if (hasOwnProperty.call(source, keys)) {
      if (source[keys] && typeof source[keys] === "object") {
        targetObj[keys] = deepClone(source[keys]);
      } else {
        targetObj[keys] = source[keys];
      }
    }
  }

  return targetObj;
}
