import { ArrayToList } from './ListBuilder'

test("type of ArrayToList is a function", ()=>{
  expect(typeof ArrayToList).toEqual('function')
})

test("ArrayToList should throw when no arg provided", () => {
  expect(() => {
    expect(ArrayToList())
  }).toThrow("Array to list needs a single array")
})

test("ArrayToList should throw when provided with argument other than array", () => {
  expect(() => {
    expect(ArrayToList(''))
  }).toThrow("Array to list needs a single array")
})

test("ArrayToList should return a object", () => {
  const got = typeof ArrayToList([1,2,3])
  const exp = 'object'
  expect(got).toEqual(exp)
})

test("ArrayToList([1, 2]) returns {value: 1, rest: {value: 2, rest: null}}", () => {
  const got = ArrayToList([1,2])
  const exp = {
    value: 1,
    rest: {
      value: 2,
      rest: null
    }
  }
  expect(got).toEqual(exp)
})

test("ArrayToList([1, 2, 3]) returns {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}", () => {
  const got = ArrayToList([1,2,3])
  const exp = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  }
  expect(got).toEqual(exp)
})
