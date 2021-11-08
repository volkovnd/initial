const _ = require("lodash");
const path = require("path");
const fs = require("fs");

/**
 *
 * @param  {...string} pathSegments
 * @returns {string}
 */
function resolve(...pathSegments) {
  return path.resolve(__dirname, ...pathSegments);
}

/**
 *
 * @param {string} path
 * @param {string} [encoding='utf-8']
 * @returns {string}
 */
function readFile(path, encoding = "utf-8") {
  return fs.readFileSync(path, { encoding: encoding });
}

/**
 *
 * @param {string} fileName
 * @param {(output: string) => string} fn
 */
function replaceFile(fileName, fn) {
  const p = resolve(fileName);

  const output = fn(readFile(p));

  fs.writeFileSync(p, output);
}

/**
 *
 * @param {string} [mode='development']
 * @param {boolean} [local=false]
 */
function createEnv(mode = "development", local = false) {
  const output = readFile(resolve(".env.example"));

  fs.writeFileSync(resolve(`.env.${mode}${local ? ".local" : ""}`), output);
}

const projectTitle = process.env.name || "Project title";

replaceFile("package.json", (str) =>
  str.replace(/"name": "[\w@\//_\-]+",\n/, `"name": "${_.kebabCase(projectTitle)}",\n`)
);

// Replace title in .env.example to correct
replaceFile(".env.example", (str) =>
  str.replace(/VUE_APP_TITLE=[\w -_]+\n/, `VUE_APP_TITLE=${_.startCase(projectTitle)}\n`)
);

// Replace title in README.md to correct
replaceFile("README.md", (str) => str.replace(/#[\w -_]+\n/, `# ${_.startCase(projectTitle)}\n`));

createEnv("development", true);
