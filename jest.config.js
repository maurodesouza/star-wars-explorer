module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/**/*.ts(x)?',
    '!src/templates/**/*.ts(x)?',
    '!src/services/**/*.ts(x)?',
    '!src/styles/**/*.ts',
    '!src/types/**/*.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest/'],
};
