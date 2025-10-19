import { greet } from '../src/index.js';

test('greets a person by name', () => {
  expect(greet('Coderetreat')).toBe('Hello, Coderetreat!');
});