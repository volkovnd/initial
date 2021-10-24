import kebabCase from "lodash/kebabCase";
import camelCase from "lodash/camelCase";

/**
 * Upper first char
 *
 * @param {string} str
 * @returns {string}
 */
const upperFirst = function (str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

/**
 * Pascal case test-title => TestTitle
 *
 * @param {string} str
 * @returns {string}
 */
const pascalCase = function (str) {
  return upperFirst(camelCase(str));
};

const prepareFileName = function (str) {
  return str.replace(/^\.\//, "").replace(/\.[\w]+$/);
};

export { kebabCase, camelCase, pascalCase, upperFirst, prepareFileName };
