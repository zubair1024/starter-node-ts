import { sayHello } from './index';

test('it should say hello', () => {
  expect(sayHello()).toBe('hello');
});

test('it should say hello with a name', () => {
  expect(sayHello('John')).toBe('hello John');
});
