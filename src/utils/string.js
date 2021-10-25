import { default as kebabCase } from "lodash/kebabCase";
import { default as camelCase } from "lodash/camelCase";

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
 * @example if enabled removeDirs ./dir1/dir2/filename.js => filename
 * @example if disabled removeDirs ./dir1/dir2/filename.js => dir1/dir2/filename
 * @param {string} str
 * @param {boolean} removeDirs Remove dirs? ./dir1/dir2/filename.js
 * @returns {string}
 */
const prepareFileName = function (str, removeDirs = false) {
  return str.replace(RegExp(`^\\.${removeDirs ? ".*" : ""}\\/`), "").replace(/\.\w+$/, "");
};

export { kebabCase, camelCase, pascalCase, upperFirst, prepareFileName };
