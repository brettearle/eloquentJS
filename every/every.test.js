import { expect, test } from "@jest/globals"
import { Every, EverySome } from "./every"

describe("Every", () => {

  test("is a function", () => {
    expect(typeof Every).toEqual("function")
  })

  test("when called without arr and func throws", () => {
    expect(() => {
      Every()
    }).toThrow("Error: args")
  })

  test("should return false when called with a arr that fails check", () => {
    const got = Every([1, 2, 3], (e) => {
      return typeof e === 'string'
    })
    const exp = false
    expect(got).toEqual(exp)
  })

  test("should return true when called with a arr that passes check", () => {
    const got = Every([1, 2, 3], (e) => {
      return typeof e === 'number'
    })
    const exp = true
    expect(got).toEqual(exp)
  })

  test("should return true when called with a arr that passes check", () => {
    const got = EverySome([1, 2, 3], (e) => {
      return typeof e === 'number'
    })
    const exp = true
    expect(got).toEqual(exp)
  })

  test("should return false when called with a arr that fails check", () => {
    const got = EverySome([1, 2, 3], (e) => {
      return typeof e === 'string'
    })
    const exp = false
    expect(got).toEqual(exp)
  })

})
