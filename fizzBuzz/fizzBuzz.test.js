import FizzBuzz from "./fizzBuzz";

test("fizzbuzz function exists", () => {
  expect(typeof FizzBuzz).toEqual("function");
});

test("fizzbuzz returns an array", () => {
  const got = FizzBuzz();
  expect(Array.isArray(got)).toEqual(true);
});
