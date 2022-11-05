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
})
