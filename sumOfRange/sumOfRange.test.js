import {  SumOfRange, Range } from "./sumOfRange"

test("sum of range should be a function", ()=>{
    expect(typeof SumOfRange).toEqual("function")
})

test("sum of range should return a array", ()=>{
    const got = SumOfRange( 1,2 )
    const expected = "object"
    expect(typeof got).toEqual(expected)
})

test("sum of range to throw error with 0 arguments",()=>{ 
  expect(() => {
    SumOfRange()
  }).toThrow("range only takes 2 int args, start and end")
})

test("sum of range should throw error with 1 argument",() => {
    expect(() => {
     SumOfRange(1)
    }).toThrow("range only takes 2 int args, start and end")
})

test("range function should return array of numbers between start and end inclusive", ()=>{
    const got = Range(1,5)
    const expected = [1,2,3,4,5]
    expect(got).toEqual(expected)
})


