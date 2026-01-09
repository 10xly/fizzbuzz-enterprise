const AddTwoNumbers = require("../../../../../source/main/utils/math/misc/AddTwoNumbers") // Import the utility module that is used specifically to add two JavaScript number values.
const ArrayReduce = require("../../array/ArrayReduce") // Import the utility module that is used specifically to reduce an array of JavaScript number values using a reducer function.
const Zero = require("../../../constants/magic-numbers/Zero") // Import the base number value 0.

function Sum(numbers) {
  return ArrayReduce(numbers, AddTwoNumbers, Zero) // Use the ArrayReduce utility module to sum all the JavaScript number values in the input array by applying the AddTwoNumbers utility module as the reducer function, starting from an initial value of Zero.
}

module.exports = Sum // Export the Sum utility module.