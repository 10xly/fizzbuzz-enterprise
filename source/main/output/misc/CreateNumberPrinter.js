const NumberPrinter = require("../../../../source/main/output/printers/PrintNumber") // Import the Print Number module that is used to print numbers.

function CreateNumberPrinter(number) {
  return function PrintNumber() {
    return NumberPrinter(number)
  }
}

module.exports = CreateNumberPrinter // Export the Create Number Printer module.