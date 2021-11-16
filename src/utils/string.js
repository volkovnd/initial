const camelCase = require("lodash/camelCase");
const kebabCase = require("lodash/kebabCase");

/**
 * Upper first char
 *
 * @param {string} str The string to convert.
 * @return {string}
 * @example
 *
 * upperFirst('foo bar');
 * // => 'Foo bar'
 */
export function upperFirst(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

/**
 * Converts `string` to [pascal case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @param {string} str The string to convert.
 * @returns {string}
 * @example
 *
 * pascalCase('Foo Bar');
 * // => 'FooBar'
 *
 * pascalCase('--foo-bar--');
 * // => 'FooBar'
 *
 * pascalCase('__FOO_BAR__');
 * // => 'FooBar'
 */
export function pascalCase(str) {
  return upperFirst(camelCase(str));
}

export { kebabCase, camelCase };
