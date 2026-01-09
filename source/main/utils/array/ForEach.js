const GetCachedIntrinsic = require("../../../../source/main/utils/intrinsic/GetCachedIntrinsic") // Import the general utility module that is used specifically to get cached intrinsic objects in JavaScript.
const UncurryThis = require("../../../../source/main/utils/functions/UncurryThis") // Import the utility module that is used specifically to uncurry JavaScript functions.
const True = require("../../../../source/main/constants/booleans/True") // Import the boolean value true.
const BaseForEach = GetCachedIntrinsic("%Array.prototype.forEach%", True) // Get the built-in JavaScript Array prototype method that is used specifically to loop through each element of an array and execute a provided function once for each array element to a constant.
const UncurriedBaseForEach = UncurryThis(BaseForEach) // Uncurry the built-in JavaScript Array prototype method that is used specifically to loop through each element of an array and execute a provided function once for each array element to a constant.

const ForEach = UncurriedBaseForEach // Assign the uncurried built-in JavaScript Array prototype method that is used specifically to loop through each element of an array and execute a provided function once for each array element to a constant.

module.exports = ForEach // Export the utility module that is used specifically to loop through each element of a JavaScript array and execute a provided function once for each array element.