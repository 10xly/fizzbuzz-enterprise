const fizz = require("string-fizz") // Import the general string "fizz".
const capitalizeFirstLetter = require("capitalize") // Import the general utility module that is used specifically to capitalize the first letter of a JavaScript string value.

const Fizz = capitalizeFirstLetter(fizz) // Capitalize the first letter of the general string "fizz" to get the general string "Fizz".

module.exports = Fizz // Export the general string "Fizz".