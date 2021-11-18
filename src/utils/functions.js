/**
 * Only once invoke function
 *
 * @param {Function} fn
 * @returns {Function}
 */
export function once(fn) {
  let called = false;

  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

/**
 * Only once invoke function
 *
 * @param {Function} fn
 * @returns {Function}
 */
export function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
