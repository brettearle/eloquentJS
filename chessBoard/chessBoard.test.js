import { ChessBoard, getXString, generateBoard } from "./chessBoard";

test("ChessBoard should be a Function", () => {
  expect(typeof ChessBoard).toEqual("function");
});

test("chessboard returns a string", () => {
  const got = ChessBoard(0, 0);
  expect(typeof got).toEqual("string");
});

test("chessboard throws error when called with anything other than int", () => {
  expect(() => {
    ChessBoard("", "");
  }).toThrow("ChessBoard needs to be called with a int for x and y");
});

test("chess board called with x of 2 and y of 2 returns '# \n# '", () => {
  const got = ChessBoard(2, 2);
  const expected = "# \n #";
  expect(got).toStrictEqual(expected);
});

test("get Xstring should return a string with length equal to int passed in", () => {
  const got = getXString(3);
  const expected = "# #";
  expect(got).toStrictEqual(expected);
});

test("generate board should return a string", () => {
  const got = generateBoard(0, 0);
  const expected = "";
  expect(got).toStrictEqual(expected);
});

test("5x5 chessboard with starting hash in top left", () => {
  const got = ChessBoard(5, 5);
  const expected = "# # #\n # # \n# # #\n # # \n# # #";
  expect(got).toStrictEqual(expected);
});
