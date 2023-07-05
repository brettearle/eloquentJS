import {Loop} from "./loop"

describe("loop", ()=>{

  test("should be a funtion", ()=>{
    expect(typeof Loop).toEqual('function')
  })

  test("takes in a value, test func, update func, body func", ()=>{
    expect(()=>{
      Loop()
    }).toThrow("Error: args. (value, testFunc, upDateFunc, bodyFunc)")
  })

  test("loop(3, n => n > 0, n => n - 1,n => n + 1)", ()=>{
    const got = Loop(3, n => n > 0, n => n - 1,n => n + 1)
    const want = 6
    expect(got).toEqual(want)
  })

})
