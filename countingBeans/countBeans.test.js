import { countB, countChar } from "./countBeans";

test("countB should be type function", () => {
  expect(typeof countB).toEqual("function");
});

test("countB called with no args throws 'no string provided'", () => {
   expect(() => {
    countB();
  }).toThrow("no string provided");
});

test("countB called with arg that isn't type string throws 'arg not a string'", () => {
  expect(() => {
    countB(1);
  }).toThrow("arg not a string");
});

test("countB called with 'ABC' should return 1", () => {
  const got = countB("ABC");
  const expected = 1;
  expect(got).toEqual(expected);
});

test("countB called with 'BBB' should return 3", () => {
  const got = countB("BBB");
  const expected = 3;
  expect(got).toEqual(expected);
});

test("countChar should be type function", () => {
  expect(typeof countChar).toEqual("function");
});

test("countChar called with no args throws 'no string provided'", () => {
  expect(() => {
    countChar();
  }).toThrow("arguments dont match parameters");
});

test("countChar called with arg that isn't type string throws 'arg are not strings'", () => {
  expect(() => {
    countChar(1, "g");
  }).toThrow("arg are not strings");
});

test("countChar called with 'abcd' and 'd' returns 1", () => {
  const got = countChar("abcd", "d");
  const expected = 1;
  expect(got).toEqual(expected);
});

test("countChar called with 'ddddd' and 'd' returns 5", () => {
  const got = countChar("ddddd", "d");
  const expected = 5;
  expect(got).toEqual(expected);
});
