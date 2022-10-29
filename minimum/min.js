const Min = function () {
  if (arguments.length !== 0) {
    const args = [...arguments];
    let result = Infinity;
    args.forEach((element) => {
      const typeOfElement = typeof element;
      if (typeOfElement !== "number") {
        throw new Error("Min called with a argument/s that were not ints");
      } else {
        element < result ? (result = element) : (result = result);
      }
    });
    return result;
  } else {
    throw new Error("No arguments provided");
  }
};

export { Min };
