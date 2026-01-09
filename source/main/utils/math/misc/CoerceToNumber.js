function CoerceToNumber(ValueThatMayBeCoercedToNumber) {
  return + ValueThatMayBeCoercedToNumber // Coerce the provided value to a JavaScript number value by using the unary plus operator.
}

module.exports = CoerceToNumber // Export the utility module that is used specifically to coerce a provided value to a JavaScript number value.