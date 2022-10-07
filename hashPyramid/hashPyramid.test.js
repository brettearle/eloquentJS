import { string } from "yargs";
import HashPyramid from "./hashPyramid";

test("expect hash pyramid to be a function", () => {
  expect(typeof HashPyramid).toEqual("function");
});

test("hashPyramid returns a string", () => {
  const got = HashPyramid();
  expect(typeof got).toEqual("string");
});

test("hash pyramid with lines arg 1 returns '#'", () => {
  const got = HashPyramid(1);
  const expected = "#";
  expect(got).toStrictEqual(expected);
});
