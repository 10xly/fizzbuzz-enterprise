const SubtractTwoNumbers = require("../../utils/math/misc/SubtractTwoNumbers") // Import the utility module that is used specifically to subtract two JavaScript number values.
const One = require("../../../../source/main/constants/magic-numbers/One") // Import the base number value 1.

function GetZero() {
  return SubtractTwoNumbers(One, One) // Subtract the base number value 1 from itself to get the base number value 0.
}

const Zero = GetZero() // Get the base number value 0.

module.exports = Zero // Export the base number value 0.