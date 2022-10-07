import FizzBuzz from "./fizzBuzz";

test("fizzbuzz function exists", () => {
  expect(typeof FizzBuzz).toEqual("function");
});

test("fizzbuzz returns an array", () => {
  const got = FizzBuzz();
  expect(Array.isArray(got)).toEqual(true);
});

test("fizzbuzz returns array with length equal to count arg", () => {
  const got = FizzBuzz(5);
  expect(got.length).toEqual(5);
});

test("fizzbuzz contains elements 'fizz' 'buzz' 'fizzbuzz'", () => {
  const expected = ["fizz", "buzz", "fizzbuzz"];
  const got = FizzBuzz(15);
  expect(got).toEqual(expect.arrayContaining(expected));
});

test("fizzbuzz to equal the correct fizzbuzz sequence using mod 3 for fizz mod 5 for buzz and both for fizzbuzz", () => {
  const got = FizzBuzz(15);
  const expected = [
    "1",
    "2",
    "fizz",
    "4",
    "buzz",
    "fizz",
    "7",
    "8",
    "fizz",
    "buzz",
    "11",
    "fizz",
    "13",
    "14",
    "fizzbuzz",
  ];
  expect(got).toStrictEqual(expected);
});
