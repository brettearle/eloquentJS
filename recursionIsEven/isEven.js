const IsEven = (num) => {
  if (typeof num !== "number") {
    throw new Error("no number provided to IsEven");
  } else {
    const absNum = Math.abs(num);
    if (absNum === 1) {
      return "Number is Odd";
    } else if (absNum === 0) {
      return "Number is Even";
    } else {
      return IsEven(absNum - 2);
    }
  }
};

export { IsEven };
