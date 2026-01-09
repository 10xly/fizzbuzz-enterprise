const And = require("../../../utils/logic/And") // Import the general utility module that is used specifically to determine whether multiple JavaScript boolean values are all true.
const IsDivisibleByThree = require("./IsDivisibleByThree") // Import the utility module that is used specifically to determine whether a JavaScript number value is divisible by the JavaScript number value of three.
const IsDivisibleByFive = require("./IsDivisibleByFive") // Import the utility module that is used specifically to determine whether a JavaScript number value is divisible by the JavaScript number value of five.

function IsDivisibleByThreeAndFive(ValueThatMayBeDivisibleByThreeAndFive) {
  return And(
    IsDivisibleByThree(ValueThatMayBeDivisibleByThreeAndFive), // Determine whether the provided value is divisible by the JavaScript number value of three by using the specific utility module.
    IsDivisibleByFive(ValueThatMayBeDivisibleByThreeAndFive) // Determine whether the provided value is divisible by the JavaScript number value of five by using the specific utility module.
  ) // Determine whether the provided value is divisible by both the JavaScript number values of three and five by using the general utility module.
}

module.exports = IsDivisibleByThreeAndFive // Export the utility module that is used specifically to determine whether a JavaScript number value is divisible by both the JavaScript number values of three and five.