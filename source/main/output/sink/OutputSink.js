const OutputConfiguration = require("../../../../source/main/constants/config/OutputConfiguration") // Import the OutputConfiguration constant that is the default configuration for the output sink.
const CreateOutputSink = require("../../../../source/main/output/sink/CreateBaseOutputSink") // Import the CreateOutputSink function, a function to create an output sink with the specified configuration.\

const OutputSink = CreateOutputSink(OutputConfiguration) // Create the output sink using the default output configuration.

module.exports = OutputSink // Export the output sink that was created using the default output configuration.