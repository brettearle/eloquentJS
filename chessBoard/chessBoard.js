const getXString = (xLength) => {
  let xString = "";
  for (let i = 1; i <= xLength; i++) {
    i % 2 === 0 ? (xString = xString + " ") : (xString = xString + "#");
  }
  return xString;
};

const generateBoard = (xStr, y) => {
  let board = "";
  for (let index = 1; index <= y; index++) {
    if (index % 2 !== 0) {
      index === y ? (board = board + xStr) : (board = board + xStr + "\n");
    } else {
      index === y
        ? (board = board + " " + xStr.slice(0, -1))
        : (board = board + " " + xStr.slice(0, -1) + "\n");
    }
  }
  return board;
};

const ChessBoard = (x, y) => {
  if (Number.isInteger(x) === false || Number.isInteger(y) === false) {
    throw new Error("ChessBoard needs to be called with a int for x and y");
  } else {
    const xString = getXString(x);
    const board = generateBoard(xString, y);
    console.log(board);
    return board;
  }
};


  

export { getXString, ChessBoard, generateBoard };


