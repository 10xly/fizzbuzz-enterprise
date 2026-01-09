const GetCachedIntrinsic = require("../../../../source/main/utils/intrinsic/GetCachedIntrinsic") // Import the general utility module that is used specifically to get cached intrinsic objects in JavaScript.
const UncurryThis = require("../../../../source/main/utils/functions/UncurryThis") // Import the utility module that is used specifically to uncurry JavaScript functions.
const True = require("../../../../source/main/constants/booleans/True") // Import the boolean value true.
const BaseReduce = GetCachedIntrinsic("%Array.prototype.reduce%", True) // Get the built-in JavaScript Array prototype method that is used specifically to reduce an array to a single value by executing a provided reducer function on each element of the array, resulting in a single output value.
const UncurriedBaseReduce = UncurryThis(BaseReduce) // Uncurry the built-in JavaScript Array prototype method that is used specifically to reduce an array to a single value by executing a provided reducer function on each element of the array, resulting in a single output value. 

const ArrayReduce = UncurriedBaseReduce // Assign the uncurried built-in JavaScript Array prototype method that is used specifically to reduce an array to a single value by executing a provided reducer function on each element of the array, resulting in a single output value to a constant.

module.exports = ArrayReduce // Export the utility module that is used specifically to reduce a JavaScript array to a single value by executing a provided reducer function on each element of the array, resulting in a single output value.