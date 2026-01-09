const concat = require("../../../utils/string/Concat") // Import the general utility module that is used specifically to concatenate JavaScript string values.
const Fizz = require("./Fizz") // Import the general string "Fizz".
const Buzz = require("./Buzz") // Import the general string "Buzz".

const FizzBuzz = concat(Fizz, Buzz) // Concatenate the general strings "Fizz" and "Buzz" to get the general string "FizzBuzz".

module.exports = FizzBuzz // Export the general string "FizzBuzz".