const IsEven = (num) => {
  if (typeof num !== "number") {
    throw new Error("no number provided to IsEven");
  } else {
    if (num === 1) {
      return "Number is Odd";
    } else if (num === 0) {
      return "Number is Even";
    } else {
      const absNum = Math.abs(num);
      return IsEven(absNum - 2);
    }
  }
};

export { IsEven };
