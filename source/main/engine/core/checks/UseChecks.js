const AddCheck = require("../../../../../source/main/engine/core/checks/AddCheck") // Import the utility module that is used specifically to add a check result to an object.
const ForEach = require("../../../utils/array/ForEach") // Import the general utility module that is used specifically to iterate over each item in an array.

function UseChecks(value, checksToUse, objectContainingResults, keyOfResult) {
  ForEach(checksToUse, (check) => {
    AddCheck(check.func, value, objectContainingResults, keyOfResult, check.truthyValueToUseForCheck) // Use the AddCheck utility module to add the check result to the object containing results.
  })
}

module.exports = UseChecks // Export the utility module that is used specifically to use multiple checks on a provided value.