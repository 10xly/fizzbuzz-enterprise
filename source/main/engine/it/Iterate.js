function Iterate(rangeStart, rangeEnd, functionToExecute) {
  for (let i = rangeStart; i <= rangeEnd; i++) {
    functionToExecute(i) // Execute the provided function with the current number in the range.
  }
}

module.exports = Iterate // Export the Iterate utility module.