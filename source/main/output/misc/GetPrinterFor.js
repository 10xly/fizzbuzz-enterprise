const IsEqual = require("../../utils/etc/IsEqual") // Import the Is Equal module that is used to compare two values for equality.

const InternalTokenToRepresentFizz = require("../../constants/strings/tokens/InternalTokenToRepresentFizz") // Import the internal token that represents "Fizz".
const InternalTokenToRepresentBuzz = require("../../constants/strings/tokens/InternalTokenToRepresentBuzz") // Import the internal token that represents "Buzz".
const InternalTokenToRepresentFizzBuzz = require("../../constants/strings/tokens/InternalTokenToRepresentFizzBuzz") // Import the internal token that represents "FizzBuzz".

const FizzPrinter = require("../printers/PrintFizz") // Import the Print Fizz module that is used to print "Fizz".
const BuzzPrinter = require("../printers/PrintBuzz") // Import the Print Buzz module that is used to print "Buzz".
const FizzBuzzPrinter = require("../printers/PrintFizzBuzz") // Import the Print FizzBuzz module that is used to print "FizzBuzz".
const CreateNumberPrinter = require("./CreateNumberPrinter") // Import the Create Number Printer module that is used to create number printer functions.

function GetPrinterFor(value) {
  if (IsEqual(value, InternalTokenToRepresentFizzBuzz)) {
    return FizzBuzzPrinter // Return the FizzBuzz Printer function.
  }
  if (IsEqual(value, InternalTokenToRepresentFizz)) {
    return FizzPrinter // Return the Fizz Printer function.
  }
  if (IsEqual(value, InternalTokenToRepresentBuzz)) {
    return BuzzPrinter // Return the Buzz Printer function.
  }
  return CreateNumberPrinter(value)
}

module.exports = GetPrinterFor // Export the Get Printer For module.