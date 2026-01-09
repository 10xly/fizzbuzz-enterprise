const ShouldReturnFizz = require("../../../../source/main/engine/core/deciders/ShouldReturnFizz") // Import the utility module that is used specifically to determine whether a JavaScript number value requires "Fizz".
const ShouldReturnBuzz = require("../../../../source/main/engine/core/deciders/ShouldReturnBuzz") // Import the utility module that is used specifically to determine whether a JavaScript number value requires "Buzz".
const ShouldReturnFizzBuzz = require("../../../../source/main/engine/core/deciders/ShouldReturnFizzBuzz") // Import the utility module that is used specifically to determine whether a JavaScript number value requires "FizzBuzz".

const InternalTokenToRepresentFizz = require("../../../../source/main/constants/strings/tokens/InternalTokenToRepresentFizz") // Import the internal token that is used specifically to represent "Fizz".
const InternalTokenToRepresentBuzz = require("../../../../source/main/constants/strings/tokens/InternalTokenToRepresentBuzz") // Import the internal token that is used specifically to represent "Buzz".
const InternalTokenToRepresentFizzBuzz = require("../../../../source/main/constants/strings/tokens/InternalTokenToRepresentFizzBuzz") // Import the internal token that is used specifically to represent "FizzBuzz".
const InternalTokenToRepresentUnchangedNumberValue = require("../../../../source/main/constants/strings/tokens/InternalTokenToRepresentUnchangedNumberValue") // Import the internal token that is used specifically to represent an unchanged number value.

const Fizz = InternalTokenToRepresentFizz // Define the constant that represents "Fizz".
const Buzz = InternalTokenToRepresentBuzz // Define the constant that represents "Buzz".
const FizzBuzz = InternalTokenToRepresentFizzBuzz // Define the constant that represents "FizzBuzz".
const UnchangedNumberValue = InternalTokenToRepresentUnchangedNumberValue // Define the constant that represents an unchanged number value.

const ReturnTrue = require("../../../../source/main/utils/stub/ReturnTrue") // Import the utility module that is used specifically to always return the boolean value true.

const Checks = [
  {
    func: ShouldReturnFizzBuzz, // The check function to determine whether to return "FizzBuzz".
    truthyValueToUseForCheck: FizzBuzz // The value to use if the check function returns true.
  },
  {
    func: ShouldReturnFizz, // The check function to determine whether to return "Fizz".
    truthyValueToUseForCheck: Fizz // The value to use if the check function returns true.
  },
  {
    func: ShouldReturnBuzz, // The check function to determine whether to return "Buzz".
    truthyValueToUseForCheck: Buzz // The value to use if the check function returns true.
  },
  {
    func: ReturnTrue, // A default check function that always returns true.
    truthyValueToUseForCheck: UnchangedNumberValue // The value to use if the check function returns true (null indicates no special value).
  }
]

module.exports = Checks // Export the array of check configurations that are used specifically to determine whether a JavaScript number value requires "Fizz", "Buzz", or "FizzBuzz".