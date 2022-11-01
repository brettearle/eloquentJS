import { SumOfRange, Range } from "./sumOfRange"

test("sum of range should be a function", () => {
  expect(typeof SumOfRange).toEqual("function")
})

test("sum of range should return a number", () => {
  const got = SumOfRange(1, 2)
  const expected = "number"
  const type = typeof got
  expect(type).toEqual(expected)
})

test("sum of range to throw error with 0 arguments", () => {
  expect(() => {
    SumOfRange();
  }).toThrow("range only takes 2 int args, start and end");
});

test("sum of range should throw error with 1 argument", () => {
  expect(() => {
    SumOfRange(1);
  }).toThrow("range only takes 2 int args, start and end");
});

test("range function should return array of numbers between start and end inclusive", () => {
  const got = Range(1, 5);
  const expected = [1, 2, 3, 4, 5];
  expect(got).toEqual(expected);
});

test("sum of range should return the added value of all numbers between start and finish", ()=>{
    const got = SumOfRange(1, 10)
    const expected = 55
    expect(got).toEqual(expected)
})

test("step range should take 3 arguments, start, finish, stepVal as ints",()=>{
  const got = Range(1, 10, 2)
  const expected = [1,3,5,7,9]
  expect(got).toEqual(expected)
})
