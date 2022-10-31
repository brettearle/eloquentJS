import {  SumOfRange } from "./sumOfRange"

test("sum of range should be a function", ()=>{
    expect(typeof SumOfRange).toEqual("function")
})

test("sum of range should return a num", ()=>{
    const got = SumOfRange( )
    const expected = "number"
    expect(typeof got).toEqual(expected)
})

test("sum of range to throw error with more than 3 arguments",()=>{ 
  expect(() => {
    SumOfRange(1,2,3)
  }).toThrow("range only takes 2 int args, start and end")
})


