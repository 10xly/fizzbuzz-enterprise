function ExecuteAll(functions) {
  for (const func of functions) {
    func() // Execute each function in the array
  }
}

module.exports = ExecuteAll // Export the ExecuteAll function for use in other modules