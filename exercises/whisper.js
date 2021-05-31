'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
var whisper = (str) => '*' + str.toLowerCase() + '*';

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper('IS THIS WHAT YOU MEAN'), '*is this what you mean*');

// End of tests */
