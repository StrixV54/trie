import '@testing-library/jest-dom';
// import '@testing-library/jest-dom/extend-expect';
import { NextRouter } from 'next/router';
import fetch from 'isomorphic-fetch';

process.env.NEXT_PUBLIC_API_URL = 'http://localhost:3000';
process.env.NEXT_PUBLIC_WEBAPP_URL = '/';

// Make fetch available globally
global.fetch = fetch;

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
});

Object.defineProperty(global, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  })),
});

Object.defineProperty(global, 'scroll', {
  writable: true,
  value: jest.fn(),
});

Object.defineProperty(global, 'open', {
  writable: true,
  value: jest.fn(),
});

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(
    () =>
    ({
      query: {},
    } as unknown as NextRouter),
  ),
}));
