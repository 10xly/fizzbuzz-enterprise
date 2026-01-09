const IsMultipleOf = require("is-multiple-of") // Import the general utility module that is used specifically to check if a JavaScript number value is a multiple of another JavaScript number value.

function IsDivisible(Dividend, Divisor) {
  return IsMultipleOf(Dividend, Divisor) // Use the general utility module that is used specifically to check if a JavaScript number value is a multiple of another JavaScript number value to determine if the provided Dividend is divisible by the provided Divisor.
}

module.exports = IsDivisible // Export the utility module that is used specifically to check if a JavaScript number value is divisible by another JavaScript number value.