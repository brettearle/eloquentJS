const getHashString = (index) => {
  const lineCount = index;
  let hashString = "";
  for (let index = 0; index < lineCount; index++) {
    hashString = hashString + "#";
  }
  return hashString;
};

const buildPyramid = (numOfLines) => {
  let returnStr = "";
  for (let index = 1; index <= numOfLines; index++) {
    const hashString = getHashString(index);
    const spacer = index === 0 || index === numOfLines ? "" : "\n";
    returnStr = returnStr + hashString + spacer;
  }
  return returnStr;
};

export default function HashPyramid(lines) {
  if (Number.isInteger(lines) === false) {
    throw new Error("must be called with a int");
  } else {
    let str = buildPyramid(lines);
    console.log(str);
    return str;
  }
}
