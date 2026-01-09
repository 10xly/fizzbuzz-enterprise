class OutputSink {
  constructor({ outputStream }) {
    this.outputStream = outputStream // Assign the provided output stream to the instance.
  }

  output(data) {
    this.outputStream.write(data) // Write the provided data to the output stream.
  }
}


module.exports = OutputSink // Export the BaseOutputSink class.