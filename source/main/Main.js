const FizzBuzzWithIteration = require("../../source/main/engine/base/FizzBuzzWithIteration") // Import the FizzBuzzWithIteration function.
const MapOutputsToTheirRespectivePrinters = require("../../source/main/output/misc/MapOutputsToRespectivePrinters") // Import the MapOutputsToTheirRespectivePrinters function.
const ExecuteAll = require("../../source/main/utils/functions/ExecuteAll") // Import the ExecuteAll function.
const One = require("../../source/main/constants/magic-numbers/One") // Import the constant value representing the number one.
const Hundred = require("../../source/main/constants/magic-numbers/Hundred") // Import the constant value representing the number one hundred.
const Newline = require("../../source/main/constants/strings/delimiters/Newline") // Import the general string that represents a new line.
const True = require("../../source/main/constants/boolean/True") // Import the constant value representing true.

function FizzBuzzWithOutput(start = One, end = Hundred) {
  const outputs = FizzBuzzWithIteration(start, end) // Get the FizzBuzz outputs using the FizzBuzzWithIteration function.
  const printers = MapOutputsToTheirRespectivePrinters(outputs) // Map the outputs to their respective printer functions.
  ExecuteAll(printers) // Execute all the printer functions to output the results.
}

function FizzBuzzWithoutOutput(start = One, end = Hundred) {
  const outputs = FizzBuzzWithIteration(start, end) // Get the FizzBuzz outputs using the FizzBuzzWithIteration function.

  return outputs.join(Newline) // Join the outputs into a single string separated by new line characters.
}

function FizzBuzz(start = One, end = Hundred, withOutput = True) {
  if (withOutput) {
    return FizzBuzzWithOutput(start, end) // Call the FizzBuzzWithOutput function if output is desired.
  }
  else {
    return FizzBuzzWithoutOutput(start, end) // Call the FizzBuzzWithoutOutput function if no output is desired.
  }
}

module.exports = FizzBuzz // Export the FizzBuzz function for use in other modules.