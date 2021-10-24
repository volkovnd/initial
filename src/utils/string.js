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

/**
 *
 * @param {string} str
 * @param {boolean} removeDirs Remove dirs? ./dir1/dir2/filename.js => if true filename else dir1/dir2/filename
 * @returns {string}
 */
const prepareFileName = function (str, removeDirs = false) {
  return str.replace(RegExp(`^\\.${removeDirs ? ".*" : ""}\\/`), "").replace(/\.\w+$/, "");
};

export { kebabCase, camelCase, pascalCase, upperFirst, prepareFileName };
