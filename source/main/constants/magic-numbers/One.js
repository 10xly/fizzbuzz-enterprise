const CoerceToNumber = require("../../utils/math/misc/CoerceToNumber") // Import the utility module that is used specifically to coerce a provided value to a JavaScript number value.
const True = require("../booleans/True") // Import the boolean value true.

const One = CoerceToNumber(True) // Coerce the boolean value true to a JavaScript number value to get the base number value 1.

module.exports = One // Export the base number value 1.