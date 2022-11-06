import {expect, test} from "@jest/globals"
import { DeepComparison } from "./DeepComparison";

describe("DeepComparison", () => {

  test("DeepComparison should be a function", () => {
    expect(typeof DeepComparison).toEqual("function")
  })

  test("DeepComparison should return a boolean", () => {
    const got = typeof DeepComparison("", "")
    const exp = "boolean"
    expect(got).toEqual(exp)
  })

  test("DeepComparison should throw without a || b params", () => {
    expect(()=>{
      expect(DeepComparison())
    }).toThrow('Error: args list')
  })

  test("DeepComparison should return false when called with 2 different args", () => {
    const got = DeepComparison("Hello", 2)
    const exp = false
    expect(got).toEqual(exp)
  })

  test("DeepComparison should return true when called with 2 same args", () => {
    const got = DeepComparison(2, 2)
    const exp = true
    expect(got).toEqual(exp)
  })

  test("called with null and a object should return false", () => {
    const got = DeepComparison(null, {val: 1})
    const exp = false
    expect(got).toEqual(exp)
  })

  test("when comparing 2 null values returns true", () => {
    const got = DeepComparison(null, null)
    const exp = true
    expect(got).toEqual(exp)
  })

  test("called with 2 arrays of different lengths returns false", () => {
    const got = DeepComparison([1,2,3], [1,2])
    const exp = false
    expect(got).toEqual(exp)
  })

  test("called with 2 arrays equal length & different values returns false", () => {
    const got = DeepComparison([1,2,3], [1,2,5])
    const exp = false
    expect(got).toEqual(exp)
  })

  test("called with 2 arrays equal length & same values returns true", () => {
    const got = DeepComparison([1,2,3], [1,2,3])
    const exp = true
    expect(got).toEqual(exp)
  })

  test("called with 2 objects with different keys returns false", () => {
    const got = DeepComparison({val: 1, strng: "hey"}, {val: 1, str: "hey"})
    const exp = false
    expect(got).toEqual(exp)
  })

  test("called with 2 objects with same keys and different values returns false", () => {
    const got = DeepComparison({val: 1, str: "hey"}, {val: 2, str: "hey"})
    const exp = false
    expect(got).toEqual(exp)
  })

  test("called with 2 objects with same keys and same values returns true", () => {
    const got = DeepComparison({val: 1, str: "hey"}, {val: 1, str: "hey"})
    const exp = true
    expect(got).toEqual(exp)
  })
})
