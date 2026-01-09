const Buzz = require("../../../../source/main/constants/strings/output/Buzz") // Import the constant string token "Buzz".
const OutputSink = require("../../../../source/main/output/sink/OutputSink") // Import the Output Sink module that is used to output strings to the console or other output destinations.
const AppendNewLine = require("../../../../source/main/utils/string/AppendNewLine") // Import the Append New Line module that is used to append a new line character to the configured string.

function PrintBuzz() {
  OutputSink.output(AppendNewLine(Buzz)) // Output the constant string token "Buzz" to the configured output destination using the Output Sink module.
}

module.exports = PrintBuzz // Export the Print Buzz module.