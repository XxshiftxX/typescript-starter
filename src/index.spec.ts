import anyTest, { TestFn } from 'ava';

const test = anyTest as TestFn;

test('Sample Test', (t) => {
  t.is(1 + 1, 2);
});
