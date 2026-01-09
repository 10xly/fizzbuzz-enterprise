const buzz = require("string-buzz") // Import the general string "buzz".
const capitalizeFirstLetter = require("capitalize") // Import the general utility module that is used specifically to capitalize the first letter of a JavaScript string value.

const Buzz = capitalizeFirstLetter(buzz) // Capitalize the first letter of the general string "buzz" to get the general string "Buzz".

module.exports = Buzz // Export the general string "Buzz".