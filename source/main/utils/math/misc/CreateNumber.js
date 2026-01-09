const ForEach = require("../../array/ForEach") // Import the utility module that is used specifically to loop through each element of a JavaScript array and execute a provided function once for each array element.
const Sum = require("../../../../../source/main/utils/math/misc/Sum") // Import the utility module that is used specifically to calculate the sum of numbers in JavaScript.
const One = require("../../../constants/magic-numbers/One")

// CreateNumber is a function that creates a number that is the length of the provided arguments passed into the CreateNumber function.
function CreateNumber(...args) {
  ForEach(args, (_, index) => {
    args[index] = One // Set each element in the arguments array to one.
  })
  return Sum(args) // Return the sum of the modified arguments array, which represents the length of the original arguments.
}

module.exports = CreateNumber // Export the utility module that is used specifically to create a number that is the length of the provided arguments passed into the CreateNumber function.