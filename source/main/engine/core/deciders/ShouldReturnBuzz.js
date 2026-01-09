const ShouldReturnFizzBuzz = require("./ShouldReturnFizzBuzz") // Import the utility module that is used specifically to determine whether a JavaScript number value requires "FizzBuzz".
const True = require("../../../constants/booleans/True") // Import the constant module that is used specifically to represent the JavaScript boolean value of true.
const False = require("../../../constants/booleans/False") // Import the constant module that is used specifically to represent the JavaScript boolean value of false.
const IsDivisibleByFive = require("../../../../../source/main/engine/core/divisibility/IsDivisibleByFive") // Import the utility module that is used specifically to determine whether a JavaScript number value is divisible by the JavaScript number value of five.

function ShouldReturnBuzz(ValueThatMayRequireFizz) {
  if (ShouldReturnFizzBuzz(ValueThatMayRequireFizz)) {
    return False // Indicate that the provided value does not require "Buzz" because it requires "FizzBuzz" by using the boolean value of false.
  }
  if (IsDivisibleByFive(ValueThatMayRequireFizz)) {
    return True // Indicate that the provided value requires "Buzz" by using the constant module.
  } else {
    return False // Indicate that the provided value does not require "Buzz" by using the constant module.
  }
}

module.exports = ShouldReturnBuzz // Export the utility module that is used specifically to determine whether a JavaScript number value requires "Buzz".