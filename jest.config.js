const {
  compilerOptions: {paths},
} = require('./tsconfig.json');

const moduleNameMapper = Object.entries(paths).reduce(
  (acc, [alias, [path]]) => {
    const key = alias.replace('*', '(.*)');
    const value = path.replace('./', '<rootDir>/').replace('*', '$1');

    return {
      [key]: value,
      ...acc,
    };
  },
  {},
);

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['./jest-setup-file.ts'],
  moduleNameMapper,
  modulePathIgnorePatterns: ['mock', 'build', 'dist'],
};
