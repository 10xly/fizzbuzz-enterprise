const IsDivisibleByThreeAndFive = require("../../../../../source/main/engine/core/divisibility/IsDivisibleByThreeAndFive") // Import the utility module that is used specifically to determine whether a JavaScript number value is divisible by both the JavaScript number values of three and five.
const True = require("../../../constants/booleans/True") // Import the constant module that is used specifically to represent the JavaScript boolean value of true.
const False = require("../../../constants/booleans/False") // Import the constant module that is used specifically to represent the JavaScript boolean value of false.

function ShouldReturnFizzBuzz(ValueThatMayRequireFizzBuzz) {
  const condition = IsDivisibleByThreeAndFive(ValueThatMayRequireFizzBuzz) // Determine whether the provided value is divisible by both the JavaScript number values of three and five by using the specific utility module.
  if (condition) {
    return True // Indicate that the provided value requires "FizzBuzz" by using the constant module.
  } else {
    return False // Indicate that the provided value does not require "FizzBuzz" by using the constant module.
  }
}

module.exports = ShouldReturnFizzBuzz // Export the utility module that is used specifically to determine whether a JavaScript number value requires "FizzBuzz".