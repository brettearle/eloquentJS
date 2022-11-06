import {expect, test} from "@jest/globals"
import {Loop} from "./loop"

describe("loop", ()=>{

  test("should be a funtion", ()=>{
    expect(typeof Loop).toEqual('function')
  })

})
