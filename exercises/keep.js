'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
var keepFirst = (str) => str.slice(0, 2);

var keepLast = (str) => str.slice(-2);

var keepFirstLast = (str) => str.slice(0, 2) + str.slice(-2);

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, "function");
assert.strictEqual(typeof keepLast, "function");
assert.strictEqual(typeof keepFirstLast, "function");
assert.strictEqual(keepFirst("life is easy"), "li");
assert.strictEqual(keepLast("life is easy"), "sy");
assert.strictEqual(keepFirstLast("life is easy"), "lisy");
// End of tests */
