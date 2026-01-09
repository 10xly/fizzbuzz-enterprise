const IsDivisible = require("../../../utils/math/predicates/IsDivisible") // Import the general utility module that is used specifically to determine whether a JavaScript number value is divisible by another JavaScript number value.
const Five = require("../../../constants/magic-numbers/Five") // Import the constant module that is used specifically to represent the JavaScript number value of five.

function IsDivisibleByFive(ValueThatMayBeDivisibleByFive) {
  return IsDivisible(ValueThatMayBeDivisibleByFive, Five) // Determine whether the provided value is divisible by the JavaScript number value of five by using the general utility module.
}

module.exports = IsDivisibleByFive // Export the utility module that is used specifically to determine whether a JavaScript number value is divisible by the JavaScript number value of five.