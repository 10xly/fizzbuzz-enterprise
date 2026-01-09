function AddCheck(func, value, objectContainingResult, keyOfResult, truthyValueToUseForCheck) {
  if (func(value)) {
    if (!(keyOfResult in objectContainingResult)) {
      objectContainingResult[keyOfResult] = truthyValueToUseForCheck // Indicate that the check passed by using the truthy value to use for the check.
    }
  }
}

module.exports = AddCheck // Export the utility module that is used specifically to add a check result to an object.