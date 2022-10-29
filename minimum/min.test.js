import { Min } from "./min";

test("Min should be type function", () => {
  expect(typeof Min).toStrictEqual("function");
});

test("min called with no arguments should throw", () => {
  expect(() => {
    Min();
  }).toThrow("No arguments provided");
});

test("min called with argument with a type of !int should throw", () => {
  expect(() => {
    Min("");
  }).toThrow("Min called with a argument/s that were not ints");
});

test("Min called with a single int arg should return that int", () => {
  const got = Min(3);
  const expected = 3;
  expect(got).toStrictEqual(expected);
});

test("Min called with 2,4 as args should return 2", () => {
  const got = Min(2, 4);
  const expected = 2;
  expect(got).toStrictEqual(expected);
});

test("Min called with 13,7,456,789,5 should return 5", () => {
  const got = Min(13, 7, 456, 789, 5);
  const expected = 5;
  expect(got).toStrictEqual(expected);
});

test("Min called with 20, -20 should return -20", () => {
  const got = Min(20, -20);
  const expected = -20;
  expect(got).toStrictEqual(expected);
});
