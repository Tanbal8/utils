import assert from 'node:assert';
import { sum } from './utils/array.js';4
import { showNumber, formatNumber, parseNumber, isDigit } from './utils/number.js';
import { get, set, toPath } from './utils/object.js';
import { capitalize, titleCase } from './utils/string.js';

const object = {
    a: 'a',
    b: {
        c: 'c',
    },
};


// Array

assert.strictEqual(sum([1, 2, 3]), 6);


// Number

assert.strictEqual(parseNumber("123"), 123);
assert.strictEqual(parseNumber('123,456,789'), 123456789);
assert.strictEqual(parseNumber('0'), 0);
assert.strictEqual(parseNumber(''), 0);
assert.strictEqual(parseNumber(null), 0);
assert.strictEqual(parseNumber('a'), 0);

assert.strictEqual(formatNumber(123456789), '123,456,789');
assert.strictEqual(formatNumber(0), '0');
assert.strictEqual(formatNumber(''), '0');
assert.strictEqual(formatNumber(null), '0');

assert.strictEqual(showNumber(123456789), '123,456,789');
assert.strictEqual(showNumber(0), '0');
assert.strictEqual(showNumber(0, ''), '');
assert.strictEqual(showNumber(null), '');
assert.strictEqual(showNumber(null, '0', '0'), '0');

assert.strictEqual(isDigit('5'), true);
assert.strictEqual(isDigit('a'), false);
assert.strictEqual(isDigit('0'), true);
assert.strictEqual(isDigit(''), false);
assert.strictEqual(isDigit(null), false);


// Object

assert.strictEqual(get(object, 'a'), 'a');
assert.strictEqual(get(object, 'b.c'), 'c');
assert.strictEqual(get(object, 'd'), null);

assert.strictEqual(get(set(object, 'd', 'd'), 'd'), 'd');
assert.strictEqual(get(set(object, 'd.e.f', 'f'), 'd.e.f'), 'f');

assert.strictEqual(toPath('a'), 'a');
assert.strictEqual(toPath('a', 'b', 'c'), 'a.b.c');


// String

assert.strictEqual(capitalize('abcdefg'), 'Abcdefg');
assert.strictEqual(titleCase('hello world'), 'Hello World');


// Validation

assert.strictEqual(titleCase('hello world'), 'Hello World');

console.log('\x1b[32mAll tests passed!\x1b[0m');