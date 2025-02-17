/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // Adjust if using a different base URL
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js'
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.jest.json'
    }],
  },
  transformIgnorePatterns: [
    'node_modules/(?!node-fetch/.*)',
  ],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.ts'], // Custom setup file (if needed)
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '<rootDir>/__tests__/setup.ts',
  ], // Ignore Next.js build folder
};

export default config;
