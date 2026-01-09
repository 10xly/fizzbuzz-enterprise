const IsDivisible = require("../../../utils/math/predicates/IsDivisible") // Import the general utility module that is used specifically to determine whether a JavaScript number value is divisible by another JavaScript number value.
const Three = require("../../../constants/magic-numbers/Three") // Import the constant module that is used specifically to represent the JavaScript number value of three.

function IsDivisibleByThree(ValueThatMayBeDivisibleByThree) {
  return IsDivisible(ValueThatMayBeDivisibleByThree, Three) // Determine whether the provided value is divisible by the JavaScript number value of three by using the general utility module.
}

module.exports = IsDivisibleByThree // Export the utility module that is used specifically to determine whether a JavaScript number value is divisible by the JavaScript number value of three.