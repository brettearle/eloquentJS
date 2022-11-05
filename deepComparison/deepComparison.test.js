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
})
