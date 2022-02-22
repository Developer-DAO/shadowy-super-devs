module.exports = {
  // Run ESLint on changes to JavaScript/TypeScript files
  // "**/*.(ts|js)?(x)": (filenames) => `yarn lint:fix . ${filenames.join(" ")}`,
  "src/**/*.+(js|json|ts|tsx|jsx)": "eslint",
  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": "next lint --fix",
};
