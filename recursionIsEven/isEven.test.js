import { IsEven } from "./isEven";

test("IsEven is a function", () => {
  expect(typeof IsEven).toEqual("function");
});

test("if called with no args throws err", () => {
  expect(() => {
    IsEven();
  }).toThrow("no number provided to IsEven");
});

test("if called with string arg throws err", () => {
  expect(() => {
    IsEven("");
  }).toThrow("no number provided to IsEven");
});

test("IsEven called with 1 should return 'Number is Odd'", () => {
  const got = IsEven(1);
  const expected = "Number is Odd";
  expect(got).toStrictEqual(expected);
});

test("IsEven called with 0 should return 'Number is Even'", () => {
  const got = IsEven(0);
  const expected = "Number is Even";
  expect(got).toStrictEqual(expected);
});

test("IsEven called with 30 should return 'Number is Even'", () => {
  const got = IsEven(30);
  const expected = "Number is Even";
  expect(got).toStrictEqual(expected);
});

test("IsEven called with 29 should return 'Number is Odd'", () => {
  const got = IsEven(29);
  const expected = "Number is Odd";
  expect(got).toStrictEqual(expected);
});

test("IsEven called with -30 should return 'Number is Even'", () => {
  const got = IsEven(-30);
  const expected = "Number is Even";
  expect(got).toStrictEqual(expected);
});

test("IsEven called with -29 should return 'Number is Odd'", () => {
  const got = IsEven(-29);
  const expected = "Number is Odd";
  expect(got).toStrictEqual(expected);
});

test("IsEven called with 50 should return 'Number is Even'", () => {
  const got = IsEven(50);
  const expected = "Number is Even";
  expect(got).toStrictEqual(expected);
});

test("IsEven called with 75 should return 'Number is Odd'", () => {
  const got = IsEven(75);
  const expected = "Number is Odd";
  expect(got).toStrictEqual(expected);
});

test("IsEven called with -1 should return 'Number is Odd'", () => {
  const got = IsEven(-1);
  const expected = "Number is Odd";
  expect(got).toStrictEqual(expected);
});
