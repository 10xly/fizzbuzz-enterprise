const GetPrinterFor = require("../../../../source/main/output/misc/GetPrinterFor") // Import the GetPrinterFor function, which gets the printer for a respective value.

function MapOutputsToRespectivePrinters(outputs) {
  return outputs.map(output => GetPrinterFor(output)) // Map each output to its respective printer using the GetPrinterFor function.
}

module.exports = MapOutputsToRespectivePrinters // Export the MapOutputsToRespectivePrinters function for use in other modules.