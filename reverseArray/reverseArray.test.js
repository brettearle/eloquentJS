
import { ReverseArr } from "../reverseArray/ReverseArray";

test("Reverse array should be a function", ()=>{
  const got = typeof ReverseArr
  const expected = 'function'
  expect(got).toEqual(expected)
})

test("reverse array should return array", ()=>{
  const got = ReverseArr([])
  const expected = []
  expect(got).toEqual(expected)
})

test("reverse array should take 1 array as a param only", ()=>{
  expect(()=>{
    ReverseArr()
  }).toThrow("one array as param")
})

test("reverse array should return opposite ordered array, eg [1,2,3] returns [3,2,1]", ()=>{
  const got = ReverseArr([1,2,3])
  const expected = [3,2,1]
  expect(got).toEqual(expected)
})
