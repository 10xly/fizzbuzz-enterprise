const FizzBuzz = require("../../constants/strings/output/FizzBuzz") // Import the constant string token "FizzBuzz".
const OutputSink = require("../../../../source/main/output/sink/OutputSink") // Import the Output Sink module that is used to output strings to the console or other output destinations.
const AppendNewLine = require("../../../../source/main/utils/string/AppendNewLine") // Import the Append New Line module that is used to append a new line character to the configured string.

function PrintFizzBuzz() {
  OutputSink.output(AppendNewLine(FizzBuzz)) // Output the constant string token "FizzBuzz" to the configured output destination using the Output Sink module.
}

module.exports = PrintFizzBuzz // Export the Print FizzBuzz module.