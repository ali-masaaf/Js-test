'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
var yell = (str) =>  str.toUpperCase();

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function');
assert.strictEqual(yell('thanks to god'), 'THANKS TO GOD');
assert.strictEqual(yell('THANKS TO GOD'), 'THANKS TO GOD');
// End of tests */
