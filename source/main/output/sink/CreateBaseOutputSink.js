const OutputSink = require("../../../../source/main/output/sink/BaseOutputSinkClass") // Import the BaseOutputSink class from the output sink module.
const Construct = require("../../utils/reflect/Construct")
function CreateOutputSink(config) {
  const myOutputSink = Construct({ target: OutputSink, args: [config] }) // Use the Construct utility to create an instance of the OutputSink class.
  return myOutputSink // Return the constructed OutputSink instance.
}
module.exports = CreateOutputSink // Export the CreateOutputSink function.