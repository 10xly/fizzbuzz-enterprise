const Process = require("../../../../source/main/nodejs-modules/Process") // Import the built-in Node.js "process" module for process-related operations.

const OutputConfiguration = {
  outputStream: Process.stdout // Use the standard output stream of the Node.js process as the default output stream.
}

module.exports = OutputConfiguration // Export the default output configuration object.