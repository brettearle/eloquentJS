const buildPyramid = (numOfLines) => {
  let returnStr = "";
  for (let index = 0; index < numOfLines; index++) {
    returnStr = returnStr + "#";
  }
  return returnStr;
};

export default function HashPyramid(lines) {
  let str = buildPyramid(lines);
  return str;
}
