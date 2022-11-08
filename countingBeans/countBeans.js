const countB = (str) => {
  if (str === undefined) {
    throw new Error("no string provided");
  } else if (typeof str !== "string") {
    throw new Error("arg not a string");
  } else {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
      const letter = str[index];
      if (letter === "B") {
        count++;
      }
    }
    return count;
  }
};

const countChar = (str, char) => {
  if (str === undefined || char === undefined) {
    throw new Error("arguments dont match parameters");
  } else if (typeof str !== "string" || typeof char !== "string") {
    throw new Error("arg are not strings");
  } else {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
      const letter = str[index];
      count = count + check(letter, char);
    }
    return count;
  }
};

const check = function(strLetter, providedChar) {
  return strLetter === providedChar ? 1 : 0;
};

export { countB, countChar };
