module.exports = {
  rootDir: 'src',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom', './jest.setup.js'],
};
