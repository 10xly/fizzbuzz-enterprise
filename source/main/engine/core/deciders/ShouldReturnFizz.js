const ShouldReturnFizzBuzz = require("./ShouldReturnFizzBuzz") // Import the utility module that is used specifically to determine whether a JavaScript number value requires "FizzBuzz".
const True = require("../../../constants/booleans/True") // Import the constant module that is used specifically to represent the JavaScript boolean value of true.
const False = require("../../../constants/booleans/False") // Import the constant module that is used specifically to represent the JavaScript boolean value of false.
const IsDivisibleByThree = require("../../../../../source/main/engine/core/divisibility/IsDivisibleByThree") // Import the utility module that is used specifically to determine whether a JavaScript number value is divisible by the JavaScript number value of three.

function ShouldReturnFizz(ValueThatMayRequireFizz) {
  if (ShouldReturnFizzBuzz(ValueThatMayRequireFizz)) {
    return False // Indicate that the provided value does not require "Fizz" because it requires "FizzBuzz" by using the boolean value of false.
  }
  if (IsDivisibleByThree(ValueThatMayRequireFizz)) {
    return True // Indicate that the provided value requires "Fizz" by using the constant module.
  } else {
    return False // Indicate that the provided value does not require "Fizz" by using the constant module.
  }
}

module.exports = ShouldReturnFizz // Export the utility module that is used specifically to determine whether a JavaScript number value requires "Fizz".