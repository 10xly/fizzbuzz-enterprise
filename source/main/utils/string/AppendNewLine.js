const Concat = require("../../../../source/main/utils/string/Concat") // Import the general utility module that is used specifically to concatenate two JavaScript string values.
const NewLine = require("../../../../source/main/constants/strings/delimiters/Newline") // Import the general string that represents a new line.

function AppendNewLine(inputString) {
  return Concat(inputString, NewLine) // Concatenate the input string with the general string that represents a new line to append a new line to the input string.
}

module.exports = AppendNewLine // Export the function that appends a new line to a JavaScript string value.