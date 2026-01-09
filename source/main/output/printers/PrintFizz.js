const Fizz = require("../../../../source/main/constants/strings/output/Fizz") // Import the constant string token "Fizz".
const OutputSink = require("../../../../source/main/output/sink/OutputSink") // Import the Output Sink module that is used to output strings to the console or other output destinations.
const AppendNewLine = require("../../../../source/main/utils/string/AppendNewLine") // Import the Append New Line module that is used to append a new line character to the configured string.

function PrintFizz() {
  OutputSink.output(AppendNewLine(Fizz)) // Output the constant string token "Fizz" to the configured output destination using the Output Sink module.
}

module.exports = PrintFizz // Export the Print Fizz module.