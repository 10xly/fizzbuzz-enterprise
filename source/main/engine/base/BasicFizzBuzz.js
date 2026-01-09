const Checks = require("../../../../source/main/constants/config/FizzBuzzCheckConfiguration") // Import the configuration module that contains the checks for FizzBuzz.
const UseChecks = require("../../../../source/main/engine/core/checks/UseChecks") // Import the utility module that is used specifically to use multiple checks on a provided value. 
const InternalTokenToRepresentUnchangedNumberValue = require("../../../../source/main/constants/strings/tokens/InternalTokenToRepresentUnchangedNumberValue") // Import the constant value that represents the internal token to use when the number value is unchanged.
const IsEqual = require("../../../../source/main/Utils/etc/IsEqual") // Import the utility module that is used specifically to check if two JavaScript values are strictly equal.
const ReturnEmptyObject = require("../../../../source/main/utils/stub/ReturnEmptyObject") // Import the utility module that is used specifically to return an empty object.

function BasicFizzBuzz(value) {
  const result = ReturnEmptyObject() // Initialize the result as an empty object.
  UseChecks(value, Checks, result, "result") // Use the FizzBuzz checks on the provided value and store the result in the result object.

  if (IsEqual(result.result, InternalTokenToRepresentUnchangedNumberValue)) {
    result.result = value // If the result is the internal token for unchanged number value, return the original number.
  }

  return result.result // Return the final result after applying the FizzBuzz checks.
}

module.exports = BasicFizzBuzz // Export the BasicFizzBuzz engine module.