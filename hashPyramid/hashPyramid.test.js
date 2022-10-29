import HashPyramid from "./hashPyramid";

test("expect hash pyramid to be a function", () => {
  expect(typeof HashPyramid).toEqual("function");
});

test("hashPyramid returns a string", () => {
  const got = HashPyramid(0);
  expect(typeof got).toEqual("string");
});

test("hash pyramid with lines arg 1 returns '#'", () => {
  const got = HashPyramid(1);
  const expected = "#";
  expect(got).toStrictEqual(expected);
});

test("hash pyramid produces 3 lines, first with #, 2nd with ##, 3rd with ###", () => {
  const got = HashPyramid(3);
  const expected = "#\n##\n###";
  expect(got).toEqual(expected);
});

test("hash pyramid produces a 10 line left aligned pyramid growing per line by 1", () => {
  const got = HashPyramid(10);
  const expected =
    "#\n##\n###\n####\n#####\n######\n#######\n########\n#########\n##########";
  expect(got).toEqual(expected);
});

test("hash pyramid to throw error if arg numOfLines isnt a int", () => {
  expect(() => {
    HashPyramid("");
  }).toThrow(new Error("must be called with a int"));
});
