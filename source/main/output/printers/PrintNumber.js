const OutputSink = require("../../../../source/main/output/sink/OutputSink") // Import the Output Sink module that is used to output strings to the console or other output destinations.
const AppendNewLine = require("../../../../source/main/utils/string/AppendNewLine") // Import the Append New Line module that is used to append a new line character to the configured string.

function PrintNumber(number) {
  OutputSink.output(AppendNewLine(number)) // Output the number to the configured output destination using the Output Sink module.
}

module.exports = PrintNumber // Export the Print Number module.