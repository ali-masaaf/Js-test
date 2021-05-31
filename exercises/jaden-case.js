'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

var jadenCase = (str) => {
    var strJadenCase = "";
    if (str != "")
    {   
        var i = 0;
        strJadenCase = str[i++].toUpperCase();
        while (i < str.length)
            (str[i-1] == " " || str[i-1] == "\t") ? 
                strJadenCase += str[i++].toUpperCase() : strJadenCase += str[i++];
    }
    return  strJadenCase;
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(jadenCase(" b"), " B");
assert.strictEqual(jadenCase(" life is easy"), " Life Is Easy");
assert.strictEqual(jadenCase(" ohh yes "), " Ohh Yes ");
assert.strictEqual(jadenCase(" BABA "), " BABA ");
assert.strictEqual(jadenCase(""), "");
// End of tests */
