const GetCachedIntrinsic = require("../../../../source/main/utils/intrinsic/GetCachedIntrinsic") // Importing the GetCachedIntrinsic utility module which is used to get cached intrinsic values.
const UncurryThis = require("../../../../source/main/utils/functions/UncurryThis") // Importing the UncurryThis utility module which is used to uncurry functions.
const Iterate = require("../../../../source/main/engine/it/Iterate") // Importing the Iterate utility module which is used for iterating over a range of numbers.
const BasicFizzBuzz = require("../../../../source/main/engine/base/BasicFizzBuzz") // Importing the BasicFizzBuzz module which is a basic fizzbuzz function.
const ReturnEmptyArray = require("../../../../source/main/utils/stub/ReturnEmptyArray") // Importing the ReturnEmptyArray utility module which exports a function that returns an empty array.
const Push = UncurryThis(GetCachedIntrinsic("%Array.prototype.push%")) // Getting the push method from Array prototype and uncurry it for use.

function FizzBuzzWithIteration(start, end) {
  const results = ReturnEmptyArray() // Initialize an empty array to store the results of the fizzbuzz operation.
  Iterate(start, end, number => {
    Push(results, BasicFizzBuzz(number)) // For each number in the specified range, apply the BasicFizzBuzz function and push the result into the results array.
  })
  return results // Return the array containing the results of the fizzbuzz operation.
}

module.exports = FizzBuzzWithIteration // Export the FizzBuzzWithIteration function for use in other modules.