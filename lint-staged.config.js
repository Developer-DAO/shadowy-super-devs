module.exports = {
  // Run ESLint on changes to JavaScript/TypeScript files
  "**/*.(ts|js)?(x)": (filenames) => `next lint --fix . ${filenames.join(" ")}`,
};
